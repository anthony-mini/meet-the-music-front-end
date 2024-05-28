import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';
import { authGuard, isLoggedInGuard } from './core/services/auth.guard';
import { ArtistProfileComponent } from './features/artist-profile/artist-profile.component';
import { EstablishmentProfileComponent } from './features/establishment-profile/establishment-profile.component';
import { WorkInProgressComponent } from './features/work-in-progress/work-in-progress.component';

export const routes: Routes = [
  {
    path: 'home',
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
  {
    path: 'artist/:alias',
    component: ArtistProfileComponent,
  },
  {
    path: 'establishment/:alias',
    component: EstablishmentProfileComponent,
  },
  {
    path: 'work-in-progress',
    component: WorkInProgressComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
