import { Injectable } from '@angular/core';

import { Connect, connectTypes } from '../models/connect.model';
import { Stop } from '../models/stop.model';
import { City } from '../../shared/item.model';

@Injectable()
export class ConnectsService {

    getConnects(stop: Stop) : Connect[] {
        return [
            {
                name: 'Walk to The Market',
                connectType: connectTypes.WALK,
                startStopId: 'ca_toronto_1',
                startTime: new Date(2018, 7, 18, 11, 50, 0),
                destinationStopId: 'ca_toronto_2',
                durationInMinutes: 12,
                distanceInKiloMeters: 1,
                detail: 'go east on front street'
            }
        ];
    }

    getConnectForStartingPoint() : Connect {
        let emptyConnect = new Connect();

        return emptyConnect;
    }
}