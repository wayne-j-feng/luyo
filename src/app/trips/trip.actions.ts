import { Action } from '@ngrx/store';

import { Trip, Activity } from './models/trip.model';

export const SET_AVAILABLE_TRIPS = '[Trip] Set Available Trips';
export const CREATE_TRIP = '[Trip] Create Trip';
export const SELECT_TRIP = '[Trip] Select Trip';
export const UPDATE_TRIP = '[Trip] Update Trip';
export const ADD_ACTIVITY = '[Trip] Add Activity';
export const SELECT_ACTIVITY = '[Trip] Select Activity';
export const UPDATE_ACTIVITY = '[Trip] Update Activity';

export class SetAvailableTrips implements Action {
    readonly type = SET_AVAILABLE_TRIPS;

    constructor(public payload: Trip[]) {}
}

export class CreateTrip implements Action {
    readonly type = CREATE_TRIP;
    
    constructor(public payload: Trip) {}
}

export class SelectTrip implements Action {
    readonly type = SELECT_TRIP;
    
    constructor(public payload: string) {}
}

export class UpdateTrip implements Action {
    readonly type = UPDATE_TRIP;
}

export class AddActivity implements Action {
    readonly type = ADD_ACTIVITY;
    
    constructor(public payload: Activity) {}
}

export class SelectActivity implements Action {
    readonly type = SELECT_ACTIVITY;
    
    constructor(public payload: string) {}
}

export class UpdateActivity implements Action {
    readonly type = UPDATE_ACTIVITY;
    
}

export type TripActions = 
    SetAvailableTrips 
    | CreateTrip 
    | SelectTrip 
    | UpdateTrip 
    | AddActivity 
    | SelectActivity 
    | UpdateActivity;