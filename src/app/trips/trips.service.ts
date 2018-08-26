import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Trip, TripBuilder, Activity, ActivityType } from './models/trip.model';
import { City } from '../shared/item.model';

import * as TripActions from './trip.actions';
import * as fromTrip from './trip.reducer';

@Injectable()
export class TripsService {

    currentTrip: Trip;

    constructor(
        private store: Store<fromTrip.State>
    ) {}

    getAllTrips() {
        const availableTrips = [
            new TripBuilder()
                .id('1')
                .name("Peru 18 days trip")
                .profile("A great trip to beatiful Peru.")
                .imageUri("https://www.cuscoperu.com/imagenes/g_tour/mapiok.jpg")
                .build(),
            new TripBuilder()
                .id('2')
                .name("Toronto One Day Trip")
                .profile("A simple one-day trip to the biggest city - Toronto.")
                .imageUri("https://www.pri-med.ca/images/PMU/toronto.png")
                .activity({
                    id: '1',
                    name: 'Union Station',
                    summary: 'Gathering place. The tour will start from here.',
                    hotSpots: [
                        {
                            imageUri: 'https://transit.toronto.on.ca/images/gotransit-2302-02.jpg',
                            name: 'Union Station Overview',
                            detail: ''
                        }
                    ],
                    address: '65 Front St W', 
                    cityCode: 'ca-to',
                    startTime: new Date(2018, 7, 18, 9, 50, 0),
                    durationInMinutes: 0,
                    distanceInKiloMeters: 0,
                    detail: 'Start from here',
                    type: ActivityType.TRIP_ORIGIN,
                    hours: null
                })
                .activity({
                    id: '2',
                    name: 'Walk to ...',
                    summary: 'Walking along Front st.',
                    hotSpots: [
                        {
                            imageUri: 'assets/images/union-walk-themarket.png',
                            name: 'Direction Map',
                            detail: 'Walk east along Front st.'
                        }
                    ],
                    address: null, 
                    cityCode: 'ca-to',
                    startTime: new Date(2018, 7, 18, 11, 50, 0),
                    durationInMinutes: 12,
                    distanceInKiloMeters: 1,
                    detail: 'go east on front street',
                    type: ActivityType.WALK,
                    hours: null
                })
                .activity({
                    id: '3',
                    name: 'St. Lawrence Market',
                    summary: 'Visit the oldest market in Toronto.',
                    hotSpots: [
                        {
                            imageUri: 'http://www.torontorealtyblog.com/wp-content/uploads/2009/11/stlawrencemkt.JPG',
                            name: 'St. Lawrance Market Outside',
                            detail: 'Outside look of the market.'
                        },
                        {
                            imageUri: 'https://thumbnails.trvl-media.com/7wKAhtIA_9wAuLRWH9J2GX0LH1c=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/178314/St-Lawrence-Market-49326.jpg',
                            name: 'St. Lawrance Market Inside',
                            detail: 'Stores inside the market.'
                        }
                    ],
                    address: '93 Front St E', 
                    cityCode: 'ca-to',
                    startTime: new Date(2018, 7, 18, 12, 10, 0),
                    durationInMinutes: 120,
                    distanceInKiloMeters: 0.1,
                    detail: '<em>St. Lawrence Market</em> is a major public market in Toronto. <p>The original market was known as Market Square and people gathered there on Saturdays at the corner of King Street and New Street, (today\'s Jarvis St) stretching west to Church Street and south to Palace (today\'s Front St), with a creek running through the center from King south to the bay.</p>',
                    type: ActivityType.SIGHT_SEEING,
                    hours: {
                        open:{hours: 9, minutes: 0},
                        close: {hours: 18, minutes: 0}
                    }
                })
                .build()
        ];
        this.store.dispatch(new TripActions.SetAvailableTrips(availableTrips));
    }
    
    getCurrentTrip() : Trip {
        return new Trip(
            "1",
            "Toronto One Day Tour",
            [
                {
                    id: '1',
                    name: 'Union Station',
                    summary: 'Gathering place. The tour will start from here.',
                    hotSpots: [
                        {
                            imageUri: 'https://transit.toronto.on.ca/images/gotransit-2302-02.jpg',
                            name: 'Union Station Overview',
                            detail: ''
                        }
                    ],
                    address: '65 Front St W', 
                    cityCode: 'ca-to',
                    startTime: new Date(2018, 7, 18, 9, 50, 0),
                    durationInMinutes: 0,
                    distanceInKiloMeters: 0,
                    detail: 'Start from here',
                    type: ActivityType.TRIP_ORIGIN,
                    hours: null
                },
                {
                    id: '2',
                    name: 'Walk to ...',
                    summary: 'Walking along Front st.',
                    hotSpots: [
                        {
                            imageUri: 'assets/images/union-walk-themarket.png',
                            name: 'Direction Map',
                            detail: 'Walk east along Front st.'
                        }
                    ],
                    address: null, 
                    cityCode: 'ca-to',
                    startTime: new Date(2018, 7, 18, 11, 50, 0),
                    durationInMinutes: 12,
                    distanceInKiloMeters: 1,
                    detail: 'go east on front street',
                    type: ActivityType.WALK,
                    hours: null
                },
                {
                    id: '3',
                    name: 'St. Lawrence Market',
                    summary: 'Visit the oldest market in Toronto.',
                    hotSpots: [
                        {
                            imageUri: 'http://www.torontorealtyblog.com/wp-content/uploads/2009/11/stlawrencemkt.JPG',
                            name: 'St. Lawrance Market Outside',
                            detail: 'Outside look of the market.'
                        },
                        {
                            imageUri: 'https://thumbnails.trvl-media.com/7wKAhtIA_9wAuLRWH9J2GX0LH1c=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/178314/St-Lawrence-Market-49326.jpg',
                            name: 'St. Lawrance Market Inside',
                            detail: 'Stores inside the market.'
                        }
                    ],
                    address: '93 Front St E', 
                    cityCode: 'ca-to',
                    startTime: new Date(2018, 7, 18, 12, 10, 0),
                    durationInMinutes: 120,
                    distanceInKiloMeters: 0.1,
                    detail: '<em>St. Lawrence Market</em> is a major public market in Toronto. <p>The original market was known as Market Square and people gathered there on Saturdays at the corner of King Street and New Street, (today\'s Jarvis St) stretching west to Church Street and south to Palace (today\'s Front St), with a creek running through the center from King south to the bay.</p>',
                    type: ActivityType.SIGHT_SEEING,
                    hours: {
                        open:{hours: 9, minutes: 0},
                        close: {hours: 18, minutes: 0}
                    }
                },
            ]
        );
    }

    selectTrip(tripId: string) {
        this.store.dispatch(new TripActions.SelectTrip(tripId));
    }

    editActivity(activity: Activity) {
        this.store.dispatch(new TripActions.SelectActivity(activity.id));
    }
}