import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { AuthInterceptor } from './core/services/auth-interceptor.service';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { CustomToastrComponent } from './core/components/custom-toastr/custom-toastr.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    importProvidersFrom(HttpClientModule),
    provideToastr({
      timeOut: 3500,
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: true,
      toastComponent: CustomToastrComponent,
      enableHtml: true,
      closeButton: false,
      tapToDismiss: false,
    }),
    provideAnimations(),
  ],
};
