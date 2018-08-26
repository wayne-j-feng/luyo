import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HotSpot } from '../../models/trip.model';

@Component({
    selector: 'app-edit-hotspot',
    templateUrl: './hotspot.component.html',
    styleUrls: ['./edit-activity.component.css']
})
export class EditHotspotComponent implements OnInit {
    hotSpotForm: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<EditHotspotComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HotSpot
    ) {}

    ngOnInit() {
        this.hotSpotForm = new FormGroup({
            "name": new FormControl(this.data.name, [Validators.required]),
            "detail": new FormControl(this.data.detail),
            "imageUri": new FormControl(this.data.imageUri, [Validators.required]),
        });
    }

    onCancelClick() {
        this.dialogRef.close();
    }

    onConfirmClick() {
        const hotSpot: HotSpot = {
            name: this.hotSpotForm.controls["name"].value,
            detail: this.hotSpotForm.controls["detail"].value,
            imageUri: this.hotSpotForm.controls["imageUri"].value
        };

        this.dialogRef.close(hotSpot);
    }
}