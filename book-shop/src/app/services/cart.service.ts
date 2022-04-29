import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: Book[] = [];

  constructor() { }

  addBook(book: Book): number{
    return this.books?.push(book);
  }
}
