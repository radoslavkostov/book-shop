import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Star{
  userId: any;
  bookId: any;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }

  getUserStars(userId: any) {
    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId) );
    return starsRef.valueChanges();
  }

  getBookStars(bookId: any) {
    const starsRef = this.afs.collection('stars', ref => ref.where('bookId', '==', bookId) );
    return starsRef.valueChanges();
  }

  setStar(userId: any, bookId: any, value: any) {
    // Star document data
    const star: Star = { userId, bookId, value };

    // Custom doc ID for relationship
    const starPath = `stars/${star.userId}_${star.bookId}`;

    // Set the data, return the promise
    return this.afs.doc(starPath).set(star);
  }

}


