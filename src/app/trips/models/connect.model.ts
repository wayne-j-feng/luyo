import { Time } from "@angular/common";

import { Stop } from './stop.model';

export const connectTypes = Object.freeze({
    BUS: 'bus',
    STREET_CAR: 'street_car',
    SUBWAY: 'subway',
    FLIGHT: 'flight',
    WALK: 'walk',
    TAXI: 'Taxi'
});

export class Connect {
    name: string;
    connectType:  string;

    startStopId: string;
    destinationStopId: string;
    durationInMinutes: number;
    distanceInKiloMeters: number;
    startTime: Date;
    detail: string;   
}
