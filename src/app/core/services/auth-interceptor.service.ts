import { HttpInterceptorFn } from '@angular/common/http';

import { Router } from '@angular/router';
import { inject } from '@angular/core';

import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { ErrorNotificationComponent } from '../components/custom-toastr/error-notification/error-notification.component';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  const token = localStorage.getItem('access_token');

  if (token && isTokenExpired(token)) {
    router.navigate(['/login']);
    localStorage.removeItem('access_token');
    showErrorMessage('La session a expiré', 'Veuillez vous reconnecter');
    return next(req);
  }

  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(authReq);
  } else {
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

function showErrorMessage(title: string, message: string) {
  const toastr = inject(ToastrService);

  const config: Partial<IndividualConfig> = {
    toastComponent: ErrorNotificationComponent,
    enableHtml: true,
    closeButton: false,
    tapToDismiss: true,
    timeOut: 4000,
  };

  const toastRef = toastr.show(title, message, config);
  if (toastRef && toastRef.toastRef) {
    toastRef.toastRef.componentInstance.title = title;
    toastRef.toastRef.componentInstance.message = message;
  }
}
