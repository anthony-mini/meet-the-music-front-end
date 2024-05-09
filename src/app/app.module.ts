import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/services/http-error-interceptor.service';
import { routes } from '../app/app.routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class AppModule {}
