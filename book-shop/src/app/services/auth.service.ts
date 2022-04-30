import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this.auth);
  authState: any = null;

  constructor(private auth: Auth, private firebaseAuth: AngularFireAuth, private cartService: CartService) {
    this.firebaseAuth.authState.subscribe( authState => {
      this.authState = authState;
    });
  }

  get currentUserId(): string{
    return this.authState.uid;
  }
  get currentUserAddress(): string{
    return this.authState.address;
  }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // updateProfile(profileData: Partial<UserInfo>): Observable<any> {
  //   const user = this.auth.currentUser;
  //   return of(user).pipe(
  //     concatMap((user) => {
  //       if (!user) throw new Error('Not authenticated');

  //       return updateProfile(user, profileData);
  //     })
  //   );
  // }

  logout(): Observable<any> {
    this.cartService.books = [];
    console.log('just logged out')
    return from(this.auth.signOut());
  }
}
