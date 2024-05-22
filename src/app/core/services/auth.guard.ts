import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const token = localStorage.getItem('access_token');

  if (token && !isTokenExpired(token)) {
    return true;
  } else {
    authService.logout();
    router.navigate(['/login']);
    return false;
  }
};

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = localStorage.getItem('access_token');

  if (token && !isTokenExpired(token)) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};

function isTokenExpired(token: any) {
  if (token) {
    const expiryDate = JSON.parse(atob(token.split('.')[1])).exp;

    return Math.floor(new Date().getTime() / 1000) >= expiryDate;
  }

  return true;
}
