import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Activity, HotSpot } from '../../models/trip.model';
import { ImagePopupComponent } from './image-popup/image-popup.component';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
  styles: [`
      .activity-header {
        background-size: cover;
    }
  `]
})
export class ActivityDetailComponent implements OnInit {

  @Input("activity")
  activity: Activity;

  constructor(public imageDialog: MatDialog) { }

  ngOnInit() {
  }

  showImage(hotSpot: HotSpot) {
    console.log(hotSpot);
    const dialogRef = this.imageDialog.open(ImagePopupComponent, {
      data: hotSpot
    });
  }
}
