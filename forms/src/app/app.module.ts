import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { Keyup2Component } from './keyup2/keyup2.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    Keyup2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
