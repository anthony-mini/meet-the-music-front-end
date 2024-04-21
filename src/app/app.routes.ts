import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent },
];
