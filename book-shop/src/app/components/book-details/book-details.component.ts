import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;
  books!: Book[];
  userDoc!: AngularFirestoreDocument<any>;
  bookDoc!: AngularFirestoreDocument<any>;
  
  user!: Observable<any>;
  book!: Observable<any>; 

  constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService, private afs: AngularFirestore, private usersService: UsersService,
    private authService: AuthService, private starService: StarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['id'];
      this.getBookById(bookId);
      this.bookDoc = this.afs.doc(`books/${bookId}`);
      this.userDoc = this.afs.doc(`users/${this.authService.currentUserId}`);
      this.user = this.userDoc.valueChanges();
      this.book = this.bookDoc.valueChanges();

    })
  }
  get bookId() {
    return this.bookDoc.ref.id;
  }

  get userId() {
    return this.userDoc.ref.id
  }

  getBookById(id: string): void{
    this.bookService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.books = data.filter(b => b.id==id).slice(0,1);
    });
  }

  // updateRatingGlobally(bookId: any){
  //   this.starService.getStarsForABook(bookId).snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ id: c.payload.doc.id, ...c.payload.doc.data() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     let totalValue = 0;
  //     let divider = 0;
  //     data.forEach(s => {
  //       totalValue+=s.value;
  //       divider++;
  //     })
  //     const result = totalValue/divider;
  //     console.log(result);
  //     this.afs.collection('/books').doc(bookId).update({avg_rating: result});
  //   });
  // }

}
