import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

import { Trip, Activity } from './models/trip.model';
import * as fromRoot from '../app.reducers';
import { 
    TripActions,
    SET_AVAILABLE_TRIPS,
    CREATE_TRIP,
    SELECT_TRIP,
    UPDATE_TRIP,
    ADD_ACTIVITY,
    SELECT_ACTIVITY,
    UPDATE_ACTIVITY
} from './trip.actions';


export interface TripState {
    availableTrips: Trip[];
    activeTrip: Trip;
    activeActivity: Activity;
}

export interface State extends fromRoot.State {
    trip: TripState;
}

const initialState: TripState = {
    availableTrips: [],
    activeTrip: null,
    activeActivity: null
};

export function tripReducer(state = initialState, action: TripActions) {
    switch (action.type) {
        case SET_AVAILABLE_TRIPS:
            return {
                ...state,
                activeTrip: null,
                activeActivity: null,
                availableTrips: action.payload
            };
        case CREATE_TRIP:
            return {
                ...state,
                availableTrips: [...state.availableTrips, action.payload],
                activeTrip: { ...action.payload },
                activeActivity: null,
            };
        case SELECT_TRIP:
            return {
                ...state,
                activeTrip: { ...findTrip(state,action.payload) },
                activeActivity: null
            };
        case UPDATE_TRIP:
            return {
                ...state,
                activeTrip: null,
                activeActivity: null
            };
        case ADD_ACTIVITY:
            return {
                ...state,
                activeTrip: {...state.activeTrip, activities: [...state.activeTrip.activities, action.payload]},
                activeActivity: { ...action.payload }
            };
        case SELECT_ACTIVITY:
            return {
                ...state,
                activeActivity: { ...state.activeTrip.activities.find(activity => activity.id === action.payload) }
            };
        case UPDATE_ACTIVITY:
            return {
                ...state,
                activeActivity: null
            };
        default: 
            return state;
    }
}

const findTrip = (state: TripState, tripId: string) => state.availableTrips.find((trip) => trip.id === tripId);

// const getNextActiveActivity = (state: TripState) => {
//     if (state.activeActivity.id != state.lastActivityId) {
//         const currentActiveIndex = state.activeTrip.activities.lastIndexOf(state.activeActivity);
//         return {...state.activeTrip.activities[currentActiveIndex + 1]};
//     }
//     return state.activeActivity;
// }

// const getPreviousActiveActivity = (state: TripState) => {
//     if (state.activeActivity.id != state.firstActivityId) {
//         const currentActiveIndex = state.activeTrip.activities.lastIndexOf(state.activeActivity);
//         return {...state.activeTrip.activities[currentActiveIndex - 1]};
//     }
//     return state.activeActivity;
// }

export const getTripState = createFeatureSelector<TripState>('trip');

export const getAvailableTrips = createSelector(getTripState, (state: TripState) => state.availableTrips);
export const getActiveTrip = createSelector(getTripState, (state: TripState) => state.activeTrip);
export const getActiveActivity = createSelector(getTripState, (state: TripState) => state.activeActivity);
