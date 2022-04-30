import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user$ = this.usersService.currentUserProfile$;
  faCartShopping = faCartShopping;
  faBookOpenReader = faBookOpenReader;
  cartItemsLength = this.cartService.books.length;

  constructor(
    private authService: AuthService,
    public usersService: UsersService,
    private router: Router,
    private cartService: CartService
  ) {}


  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
