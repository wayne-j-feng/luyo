import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Trip, TripBuilder, Activity, ActivityType } from '../models/trip.model';
import * as fromTrip from '../trip.reducer';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  tripForm: FormGroup;
  activities: Activity[];
  selectedActivity: Activity;

  constructor(
    private store: Store<fromTrip.State>,
    private tripsService: TripsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tripForm = this.createEmptyForm();
    this.store.select(fromTrip.getActiveTrip).pipe(take(1)).subscribe((selectedTrip: Trip) => {
      this.activities = [...selectedTrip.activities];
      this.tripForm.controls['name'].patchValue(selectedTrip.name);
      this.tripForm.controls['imageUri'].patchValue(selectedTrip.imageUri);
      this.tripForm.controls['profile'].patchValue(selectedTrip.profile);
    });
  }

  private createEmptyForm() : FormGroup {
    return new FormGroup({
      'imageUri': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'profile': new FormControl(null)
    });
  }

  select(activity: Activity) {
    this.selectedActivity = activity;
  }

  editActivity(activity: Activity) {
    this.tripsService.editActivity(activity);
    this.router.navigate(['activity'], {relativeTo: this.route});
  }
}
