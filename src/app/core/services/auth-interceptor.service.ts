import { Injectable } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  const token = localStorage.getItem('access_token');

  if (token && isTokenExpired(token)) {
    router.navigate(['/login']);
    localStorage.removeItem('access_token');
    return next(req);
  }

  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(authReq);
  } else {
    console.log('No token found');
    return next(req);
  }
};

function isTokenExpired(token: any) {
  if (token) {
    const expiryDate = JSON.parse(atob(token.split('.')[1])).exp;

    return Math.floor(new Date().getTime() / 1000) >= expiryDate;
  }

  return true;
}
