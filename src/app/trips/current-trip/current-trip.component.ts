import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Activity, Trip } from '../models/trip.model';
import { Stop, Attraction } from '../models/stop.model';
import { Connect } from '../models/connect.model';
import { City } from '../../shared/item.model';
import * as fromTrip from '../trip.reducer';
import * as TripActions from '../trip.actions';

@Component({
  selector: 'app-current-trip',
  templateUrl: './current-trip.component.html',
  styleUrls: ['./current-trip.component.css']
})
export class CurrentTripComponent implements OnInit {

  displayedColumns = ['startTime', 'route', 'duration', 'stop', 'stopImage'];
  dataSource = new MatTableDataSource<Activity>();

  id: string;
  tripName: string;
  activities: Activity[];
  selectedActivity: Activity;
  firstActivityId: string;
  lastActivityId: string;

  constructor(
    private store: Store<fromTrip.State>, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select(fromTrip.getActiveTrip).pipe(take(1)).subscribe(trip => {
      this.tripName = trip.name
      this.activities = trip.activities;
      if (this.activities != null && this.activities.length > 0) {
        this.firstActivityId = this.activities[0].id;
        this.lastActivityId = this.activities[this.activities.length-1].id;
      }
      else {
        this.firstActivityId = null;
        this.lastActivityId = null;
      }
    });
    // this.selectedActivity$ = this.store.select(fromTrip.getActiveActivity);
    // this.firstActivityId$ = this.store.select(fromTrip.getFirstActivityId);
    // this.lastActivityId$ = this.store.select(fromTrip.getLastActivityId);
  }

  select(activity: Activity) {
    // this.store.dispatch(new TripActions.SelectActivity(activity.id));
    // console.log(activity);
    this.selectedActivity = activity;
  }

  next() {
    //this.store.dispatch(new TripActions.SelectNextActivity());
    if (this.selectedActivity.id != this.lastActivityId) {
      const currentActiveIndex = this.activities.lastIndexOf(this.selectedActivity);
      this.selectedActivity = this.activities[currentActiveIndex + 1];
    }
  }

  previous() {
    //this.store.dispatch(new TripActions.SelectPreviousActivity());
    if (this.selectedActivity.id != this.firstActivityId) {
      const currentActiveIndex = this.activities.lastIndexOf(this.selectedActivity);
      this.selectedActivity = this.activities[currentActiveIndex - 1];
    }
  }
  edit() {
    this.router.navigate(['edit'], {relativeTo: this.route.parent});
  }
}
