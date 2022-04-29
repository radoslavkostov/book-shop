import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(bookToAdd: Book): void{
    console.log(this.cartService.addBook(bookToAdd));
  }

}
