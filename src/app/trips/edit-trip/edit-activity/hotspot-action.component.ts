import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { HotSpot } from '../../models/trip.model';

@Component({
    selector: 'app-hotspot-action-dialog',
    template: `
        <h1 mat-dialog-title>{{ data.name }}</h1>
        <mat-dialog-content>
            <p>Please select an action for this hot spot.</p>
        </mat-dialog-content>
        <mat-dialog-actions>
        <button mat-button (click)="onEditClick()" cdkFocusInitial>Edit</button>
        <button mat-button [mat-dialog-close]="'remove'">Remove</button>
        <button mat-button (click)="onCancelClick()">Cancel</button>
        </mat-dialog-actions>
    `
})
export class HotSpotActionComponent {

    constructor(
        private dialogRef: MatDialogRef<HotSpotActionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HotSpot
    ){}

    onCancelClick() {
        this.dialogRef.close();
    }

    onEditClick() {
        this.dialogRef.close("edit");
    }
}