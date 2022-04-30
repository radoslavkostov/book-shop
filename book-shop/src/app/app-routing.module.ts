import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { RemoveItemComponent } from './components/remove-item/remove-item.component';
import { OrderErrorComponent } from './components/order-error/order-error.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'top-rated',
    component: TopRatedComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'my-cart',
    component: MyCartComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'remove-item',
    component: RemoveItemComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'order-error',
    component: OrderErrorComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'details/:id',
    component: BookDetailsComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
