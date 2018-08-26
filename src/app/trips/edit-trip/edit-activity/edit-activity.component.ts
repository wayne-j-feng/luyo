import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Activity, ActivityType, HotSpot } from '../../models/trip.model';
import * as fromTrip from '../../trip.reducer';
import { Country, City } from '../../../shared/item.model';
import { ConstantDataService } from '../../../shared/constant-data.service';
import { EditHotspotComponent } from './hotspot.component';
import { HotSpotActionComponent } from './hotspot-action.component';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {

  countryOptions: Country[];

  activityForm: FormGroup;
  hotSpots: HotSpot[];

  constructor(
    private constantDataService: ConstantDataService,
    private store: Store<fromTrip.State>,
    private hotSpotDialog: MatDialog
  ) { }

  ngOnInit() {
    this.countryOptions = this.constantDataService.getCountries();
    this.activityForm = this.createEmptyForm();
    this.store.select(fromTrip.getActiveActivity).subscribe((selectedActivity : Activity) => {
      if (selectedActivity) {
        this.activityForm.controls['name'].patchValue(selectedActivity.name);
        this.activityForm.controls['summary'].patchValue(selectedActivity.summary);
        this.activityForm.controls['detail'].patchValue(selectedActivity.detail);
        this.activityForm.controls['type'].patchValue(selectedActivity.type);
        this.activityForm.controls['cityCode'].patchValue(selectedActivity.cityCode);
        this.hotSpots = [...selectedActivity.hotSpots];
      }
    });
  }


  private createEmptyForm() : FormGroup {
    return new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'summary': new FormControl(null, []),
      'type': new FormControl(null, [Validators.required]),
      'durationInMinutes': new FormControl(null, [Validators.required]),
      'distanceInKiloMeters': new FormControl(null, [Validators.required]),
      'startTime': new FormControl(null, [Validators.required]),
      'detail': new FormControl(null, [Validators.required]),
      'open': new FormControl(null, [Validators.required]),
      'close': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'cityCode': new FormControl(null, [Validators.required])
      });
  }

  editHotSpot(hotSpot: HotSpot) {
    const dialogRef = this.hotSpotDialog.open(EditHotspotComponent, {
      data: {...hotSpot},
      height: '400px',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((result: HotSpot) => {
      hotSpot.name = result.name;
      hotSpot.detail = result.detail;
      hotSpot.imageUri = result.imageUri;
    });
  }

  selectHotSpotAction(hotSpotToManage: HotSpot) {
    const dialogRef = this.hotSpotDialog.open(HotSpotActionComponent, {
      data: {...hotSpotToManage}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'edit') {
        this.editHotSpot(hotSpotToManage);
      }
      else if (result === 'remove') {
        this.hotSpots = this.hotSpots.filter((hotSpot: HotSpot) => hotSpot !== hotSpotToManage);
      }
    });
  }

  getCityByCountry(country: Country): City[] {
    return this.constantDataService.getCities(country);
  }

  getActivityTypes(): string[] {
    return Object.values(ActivityType);
  }

  compareCity(cityCode1: string, cityCode2: string): boolean {
    return cityCode1 === cityCode2;
  }
}
