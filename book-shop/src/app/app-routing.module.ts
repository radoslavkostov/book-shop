import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'my-cart', component: MyCartComponent, canActivate: [AuthGuard] },
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  { path: 'top-rated', component: TopRatedComponent, canActivate: [AuthGuard] },
  { path: 'thank-you-page', component: ThankYouPageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}