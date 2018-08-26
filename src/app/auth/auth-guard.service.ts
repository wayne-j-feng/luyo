import { Injectable } from '@angular/core';
import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot,
    Router,
    Route,
    CanLoad
 } from '@angular/router';
 import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromRoot from '../app.reducers';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private store: Store<fromRoot.State>
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select(fromRoot.getIsAuthenticated).pipe(take(1));
    }

    canLoad(route: Route) {
        return this.store.select(fromRoot.getIsAuthenticated).pipe(take(1));
    }
}