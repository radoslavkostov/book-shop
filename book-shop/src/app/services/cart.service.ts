import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: Book[] = [];

  constructor() { }

  addBook(book: Book): void{
    this.books?.push(book);
  }

  getBooks(){
    return of(this.books);
  }
}
