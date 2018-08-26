import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { QuillModule } from 'ngx-quill';

import { SharedModule } from '../shared/shared.module';
import { TripsRoutingModule } from './trips-routing.module';
import { AttractionService } from './attractions/attraction.service';
import { TripsComponent } from './trips.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { NewAttractionComponent } from './attractions/new-attraction/new-attraction.component';
import { ExistingAttractionComponent } from './attractions/existing-attraction/existing-attraction.component';
import { ConnectsComponent } from './connects/connects.component';
import { NewConnectComponent } from './connects/new-connect/new-connect.component';
import { ConnectDetailComponent } from './connects/connect-detail/connect-detail.component';
import { StopsComponent } from './stops/stops.component';
import { NewStopComponent } from './stops/new-stop/new-stop.component';
import { AttractionComponent } from './attractions/attraction/attraction.component';
import { CurrentTripComponent } from './current-trip/current-trip.component';
import { StopDetailComponent } from './stops/stop-detail/stop-detail.component';
import { StopsService } from './stops/stops.service';
import { ConnectsService } from './connects/connects.service';
import { TripsService } from './trips.service';
import { ActivityDetailComponent } from './current-trip/activity-detail/activity-detail.component';
import { ActivitySubtitlePipe } from './current-trip/activity-detail/activity-subtitle.pipe';
import { ImagePopupComponent } from './current-trip/activity-detail/image-popup/image-popup.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { EditActivityComponent } from './edit-trip/edit-activity/edit-activity.component';
import { tripReducer } from './trip.reducer';
import { EditHotspotComponent } from './edit-trip/edit-activity/hotspot.component';
import { HotSpotActionComponent } from './edit-trip/edit-activity/hotspot-action.component';

@NgModule({
    declarations:[
        TripsComponent,
        AttractionsComponent,
        NewAttractionComponent,
        ExistingAttractionComponent,
        ConnectsComponent,
        NewConnectComponent,
        ConnectDetailComponent,
        StopsComponent,
        NewStopComponent,
        AttractionComponent,
        CurrentTripComponent,
        StopDetailComponent,
        ActivityDetailComponent,
        ActivitySubtitlePipe,
        ImagePopupComponent,
        TripListComponent,
        EditTripComponent,
        EditActivityComponent,
        EditHotspotComponent,
        HotSpotActionComponent
    ],
    imports: [
        SharedModule,
        TripsRoutingModule,
        QuillModule,
        StoreModule.forFeature('trip', tripReducer)
    ],
    providers: [
        AttractionService,
        StopsService,
        ConnectsService,
        TripsService
    ],
    entryComponents:[
        ImagePopupComponent,
        EditHotspotComponent,
        HotSpotActionComponent
    ]
})
export class TripsModule {

}