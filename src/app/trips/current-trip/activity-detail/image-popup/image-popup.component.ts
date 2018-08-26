import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HotSpot } from '../../../models/trip.model';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public hotSpot: HotSpot) {}
}