import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
})
export class AppModule {}
