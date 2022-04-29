import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private dbPath = '/books';

  booksRef: AngularFirestoreCollection<Book>;
  constructor(private db: AngularFirestore) { 
    this.booksRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Book>{
    return this.booksRef;
  }
}
