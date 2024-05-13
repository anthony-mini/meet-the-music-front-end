import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';
import { authGuard, isLoggedInGuard } from './core/services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [isLoggedInGuard],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, canActivate: [authGuard] },
];
