import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  books?: Book[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.books.forEach(b => this.books?.push(b));
    console.log(this.books?.length);
  }

}
