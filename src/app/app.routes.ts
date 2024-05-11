import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';
import { authGuard } from './core/services/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, canActivate: [authGuard] },
];
