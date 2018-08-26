import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Item } from './item.model';

@Injectable()
export class ImageService {

    imageMapping = new Map();

    imageStorageRef = firebase.storage().ref();

    uploadImage(item: Item, imageFile: File): Promise<string> {
        const imagePath = this.getImagePath(item);
        let imageRef = this.imageStorageRef.child(imagePath);
        const metadata = {
            contentType: 'image/jpeg'
        };
        const uploadTask = imageRef.put(imageFile);

        return new Promise(
            function(resolve, reject) {
                uploadTask.on(
                    firebase.storage.TaskEvent.STATE_CHANGED,
                    function(error){
                        reject(error);
                    }
                ),
                function() {
                    resolve(uploadTask.snapshot.downloadURL);
                }
            }
        )
    }

    getImageRefPromise(item: Item): Promise<string> {
        return new Promise<string>(
            (resolve, reject) => {
                if (this.imageMapping.has(item.id)) {
                    resolve(this.imageMapping.get(item.id));
                }
                else {
                    const imagePath = this.getImagePath(item);
                    return this.imageStorageRef
                                .child(imagePath)
                                .getDownloadURL()
                                .then(
                                    (url: string) => {
                                        this.imageMapping.set(item.id, url);
                                        resolve(url);
                                    }
                                )
                                .catch(
                                    (reason: any) => {
                                        console.log(reason);
                                        reject(reason);
                                    }
                                );    
                }   
            }        
        );
    }

    private getImagePath(item: Item) {
        return 'images/' + item.type + '/' + item.id;
    }

}