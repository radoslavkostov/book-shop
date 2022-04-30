import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { CartService } from 'src/app/services/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart(bookToAdd: Book): void{
    this.cartService.addBook(bookToAdd);
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
    });
  }

}

@Component({
  selector: 'snack-bar-component',
  templateUrl: 'snack-bar-component.html',
  styles: [
    `
    .snack-bar {
      color: white;
      text-align: center;
      font-size: 20px;
    }
    p{
      margin-top: 10px
    }
  `,
  ],
})
export class SnackBarComponent {}
