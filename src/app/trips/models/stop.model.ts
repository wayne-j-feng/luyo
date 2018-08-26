import { Time } from "@angular/common";

const features = Object.freeze({
    WIFI: 'wifi',
    BREAKFAST: 'breakfast'
});

export interface Stop {
    id: string,
    name: string,
    imageUri: string,
    address : string;
    cityCode: string;
}

export interface Business {
    closeDates: Date[];

    weekDayOpenTime: Time[];
    weekendOpenTime: Time[];

    weekDayCloseTime: Time[];
    weekendCloseTime: Time[];
}

export class Hotel implements Business, Stop {
    closeDates: Date[];
    weekDayOpenTime: Time[];
    weekendOpenTime: Time[];
    weekDayCloseTime: Time[];
    weekendCloseTime: Time[];
    
    id: string;
    name: string;
    imageUri: string;
    address : string;
    cityCode: string;
}

export class Restaurant implements Stop {
    id: string;
    name: string;
    imageUri: string;
    address : string;
    cityCode: string;
}

export class Residence implements Stop {
    id: string;
    name: string;
    imageUri: string;
    address : string;
    cityCode: string;
}

export class Attraction implements Stop {
    id: string;
    name: string;
    imageUri: string;
    address : string;
    cityCode: string;
}

export class Station implements Stop {
    id: string;
    name: string;
    imageUri: string;
    address : string;
    cityCode: string;
}
