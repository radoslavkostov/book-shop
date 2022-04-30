import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Star{
  userId: any;
  bookId: any;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class StarService {
  stars: Star[] = [];

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
    // this.afs.collection('/books').doc(bookId).update({ratings: [value]});
    

    // Set the data, return the promise
    this.afs.doc(starPath).set(star);

    this.getStarsForABook(bookId);
  }

  getStarsForABook(bookId: any){
    let starsRef: AngularFirestoreCollection<Star> = this.afs.collection('stars', ref => ref.where('bookId', '==', bookId));
    starsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.stars = data;
      let totalValue = 0;
      let divider = 0;
      data.forEach(s => {
        totalValue+=s.value;
        divider++;
      })
      const result = totalValue/divider;
      console.log(result);
      this.afs.collection('/books').doc(bookId).update({avg_rating: result});
    });
    // return this.afs.collection('stars', ref => ref.where('bookId', '==', bookId)) as AngularFirestoreCollection<Star>
  }

}


