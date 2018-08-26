import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducers';
import * as UI from '../shared/ui.actions';
import * as Auth from './auth.actions';

import * as firebase from 'firebase';

import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
    private user: User;

    constructor(
        private router: Router, 
        private afAuth: AngularFireAuth,
        private uiService: UIService,
        private store: Store<fromRoot.State>) {}

    ngOnInit() {
        console.log('AuthService initiated!');
    }

    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.store.dispatch(new Auth.SetAuthenticated());
                this.router.navigate(['/trips']);
            }
            else {
                this.store.dispatch(new Auth.SetUnauthenticated());
                this.router.navigate(['/login']);
            }
        });
    }

    registerUser(authData: AuthData) {
        this.store.dispatch(new UI.StartLoading())
        this.afAuth.auth.createUserWithEmailAndPassword(
            authData.email, 
            authData.password
        ).then(result => {
            console.log(result);           
            this.store.dispatch(new UI.StopLoading());
        })
        .catch(error => {
            console.log(error);
            this.store.dispatch(new UI.StopLoading());
        });
    }

    signinUser(email: string, password: string) {
        this.store.dispatch(new UI.StartLoading())
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
            response => {
                //this.router.navigate(['/clothes']);
                console.log(response);
                this.store.dispatch(new UI.StopLoading());
            }
        )
        .catch(
            error => {
                console.log(error);
                this.store.dispatch(new UI.StopLoading());
                this.uiService.showSnackbar(error.message, null, 30000);
            }
        );
    }

    logout() {
        this.afAuth.auth.signOut()
            .catch((reason: any) => console.log(reason));          
    }
}