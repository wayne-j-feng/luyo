import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FoodsComponent } from './foods/foods.component';
import { AttractionsComponent } from './trips/attractions/attractions.component';
import { AuthGuard } from './auth/auth-guard.service';
import { TripsRoutingModule } from './trips/trips-routing.module';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'foods', component: FoodsComponent},
    {path: 'trips', loadChildren: './trips/trips.module#TripsModule', canLoad: [AuthGuard]} 
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule {}