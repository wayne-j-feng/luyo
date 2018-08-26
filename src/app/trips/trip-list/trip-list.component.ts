import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip.model';
import { TripsService } from '../trips.service';
import * as fromTrip from '../trip.reducer';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips$: Observable<Trip[]>;

  constructor(
    private tripsService : TripsService, 
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromTrip.State>) { }

  ngOnInit() {
    this.tripsService.getAllTrips();
    this.trips$ = this.store.select(fromTrip.getAvailableTrips);
  }

  select(trip: Trip) {
    this.tripsService.selectTrip(trip.id);
    this.router.navigate(['detail'], {relativeTo: this.route})
  }
}
