import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const cookieService = inject(CookieService);

  const token = cookieService.get('access_token');

  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(authReq);
  } else {
    return next(req);
  }
};
