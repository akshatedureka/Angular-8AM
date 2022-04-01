import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import NgForDirective from './directives/ngfor.directive';
import NgIfDirective from './directives/ngif.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForDirective,
    NgIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NgIfDirective]
})
export class AppModule { }
