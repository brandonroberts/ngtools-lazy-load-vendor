import { NgModule, Component } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PortalModule } from './modules/portal/module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
