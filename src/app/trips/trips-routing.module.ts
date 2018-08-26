import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsComponent } from './trips.component';
import { CurrentTripComponent } from './current-trip/current-trip.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { EditActivityComponent } from './edit-trip/edit-activity/edit-activity.component';

const routes: Routes = [
    { path: '', component: TripsComponent, children:[
        { path: '', component: TripListComponent, pathMatch: 'full' }
        ,{ path: 'detail', component: CurrentTripComponent }
        ,{ path: 'edit', component: EditTripComponent, pathMatch: 'full'}
        , { path: 'edit/activity', component: EditActivityComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TripsRoutingModule {}