import { Injectable } from '@angular/core';

import { Stop } from '../models/stop.model';
import { City } from '../../shared/item.model';

@Injectable()
export class StopsService {

    getStops(city: City) : Stop[] {
        return [
            {
                id: 'ca_toronto_1',
                name: 'Union Station',
                imageUri: 'https://transit.toronto.on.ca/images/gotransit-2302-02.jpg',
                address: '65 Front St W', 
                cityCode: 'ca-Toronto'
            },
            {
                id: 'ca_toronto_2',
                name: 'St. Lawrence Market',
                imageUri: 'http://www.torontorealtyblog.com/wp-content/uploads/2009/11/stlawrencemkt.JPG',
                address: '93 Front St E', 
                cityCode: 'ca-Toronto'
            }
          ];
    }
}
