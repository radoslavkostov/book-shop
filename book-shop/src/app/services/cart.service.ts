import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books!: Book[];

  constructor() { }

  addBook(book: Book): number{
    localStorage.setItem(book.id!, '2');
    return this.books?.push(book);
  }
}
