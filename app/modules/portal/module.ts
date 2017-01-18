import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeView, routes } from './routes';

@NgModule({
  declarations: [
    HomeView
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class PortalModule { }
