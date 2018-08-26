import { Time } from "@angular/common";

import { Stop } from './stop.model';
import { Connect } from './connect.model';
/*
export interface Activity {
    startTime: Date;
    move: Connect;
    stop: Stop;
}
*/

export interface Hours {
    open: Time;
    close: Time;
}

export interface HotSpot {
    imageUri: string;
    name: string;
    detail: string;
}

export enum ActivityType {
    TRIP_ORIGIN = 'trip_origin',
    Home = 'home',
    HOTEL = 'hotel',

    BUS = 'bus',
    STREET_CAR = 'tram',
    SUBWAY = 'subway',
    FLIGHT = 'flight',
    WALK = 'directions_walk',

    DINING = 'local_dining',
    SIGHT_SEEING = 'local_see'
};

export interface Activity {
    id: string;
    name: string;
    summary: string;
    type: ActivityType;
    durationInMinutes: number;
    distanceInKiloMeters: number;
    startTime: Date;
    detail: string;
    hours: Hours;
    hotSpots: HotSpot[],
    address : string;
    cityCode: string;
}

export class Trip {
    
    constructor(public id: string, public name: string, public activities: Activity[]){}

    ongoingActivityIndex: number;
    imageUri: string;
    profile: string;

    getOngoingActivity() : Activity {
        return this.activities != null ? 
                this.activities[this.ongoingActivityIndex]
                : null;
    }
}

export class TripBuilder {
    private trip: Trip = new Trip ('', '', []);

    id(value: string) {
        this.trip.id = value;
        return this;
    }

    name(value: string) {
        this.trip.name = value;
        return this;
    }

    imageUri(value: string) {
        this.trip.imageUri = value;
        return this;
    }

    profile(value: string) {
        this.trip.profile = value;
        return this;
    }

    activity(value: Activity) {
        let len = this.trip.activities.length;
        this.trip.activities[len] = value;
        return this;
    }

    activities(value: Activity[]) {
        this.trip.activities = [...this.trip.activities, ...value];
        return this;
    }

    build() {
        return this.trip;
    }
}