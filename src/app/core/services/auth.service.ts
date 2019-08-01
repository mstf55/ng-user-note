import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../user/user';
import { USER_COLLECTION } from '../../shared/constants';


@Injectable()
export class AuthService {
  user: Observable<User | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`${USER_COLLECTION}/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })

    );
  }
  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password);
  }



  logOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  signup(email: string, password: string,username:string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password);
     
  }
}