import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  books?: Book[];

  constructor() { }

  ngOnInit(): void {
  }

}
