import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ httpInterceptorProviders ],
})
export class AppModule {}