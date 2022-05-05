import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import RetryComponent from './retry.component';

@NgModule({
  declarations: [
    AppComponent,
    RetryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RetryComponent]
})
export class AppModule { }
