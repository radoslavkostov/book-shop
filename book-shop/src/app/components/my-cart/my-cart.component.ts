import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  books?: Book[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.books.forEach(b => this.books?.push(b));
    console.log(this.books?.length);
    this.books?.forEach(b=>this.totalPrice+=b.price!);
  }

  

  completeOrder(){
    this.router.navigate(['checkout']);
    this.cartService.books = [];
  }

}
