import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-cart-item',
  templateUrl: './my-cart-item.component.html',
  styleUrls: ['./my-cart-item.component.css']
})
export class MyCartItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  removeBook(): void{
    let index = this.cartService.books.indexOf(this.book);
    this.cartService.books.splice(index, 1);
    this.router.navigate(['/remove-item']);
  }

}
