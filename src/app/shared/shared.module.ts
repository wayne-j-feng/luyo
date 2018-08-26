import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DropdownDirective } from '../shared/dropdown.directive';
import { ItemComponent } from './item/item.component';
import { ConstantDataService } from './constant-data.service';
import { MaterialModule } from '../material.module';
import { ShortenPipe } from './shorten.pipe';
import { UIService } from './ui.service';

@NgModule({
    declarations: [
        DropdownDirective,
        ItemComponent,
        ShortenPipe
    ],
    exports: [
        DropdownDirective,
        CommonModule,
        ItemComponent,
        ReactiveFormsModule,
        MaterialModule,
        ShortenPipe,
        FlexLayoutModule
    ],
    imports: [
        RouterModule,
        MaterialModule,
        FlexLayoutModule
    ],
    providers: [
        ConstantDataService,
        UIService
    ]
})
export class SharedModule {

}
