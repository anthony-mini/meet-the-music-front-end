import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

const token = localStorage.getItem('access_token');

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (token) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
