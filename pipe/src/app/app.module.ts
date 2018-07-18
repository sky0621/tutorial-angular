import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroBirthday2Component } from './hero-birthday2/hero-birthday2.component';
import { StrengthenPipe } from './strengthen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthday2Component,
    StrengthenPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
