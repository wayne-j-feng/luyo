import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { Item } from './item.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {

    private serviceUri = "https://my-storage-486b6.firebaseio.com/storage";

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {}

    saveItem(item: Item): Observable<any> {
        const uri = this.buildUri(item);
        if (item.id) {
            return this.httpClient.put<Item>(uri, item, {observe: "body"});
        } else {
            return this.httpClient.post<Item>(uri, item, {observe: "body"});
        }
    }

    getItem(type: string, id: string) : Observable<Item>{
        const baseUri = this.getUri(type, id);
        return this.httpClient
            .get<Item>(baseUri, {observe: 'body', responseType: 'json'})
            .map((item: Item)=> {
                item.id = id;
                return item;
            });
    }

    getItems(type: string) : Observable<Item[]> {
        const uri = this.getUri(type, null);
        return this.httpClient
            .get<any>(uri)
            .map((data: any) => {
                let items = [];
                Object.keys(data).forEach(function(id) {
                    const item : Item = data[id];
                    item.id = id;
                    items.push(item);
                });
                return items;
            });
    }

    private buildUri(item: Item) : string {
        return this.getUri(item.type, item.id);
    }

    private getUri(type: string, id: string) {
        let baseUri = this.serviceUri + "/" + type;
        if (id) {
            baseUri += "/" + id;
        }
        return baseUri + ".json";
   }
}