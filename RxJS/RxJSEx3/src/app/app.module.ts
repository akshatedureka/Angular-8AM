import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import Comp1Component from './components/comp1.component';
import Comp2Component from './components/comp2.component';
import DemoComponent from './components/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }
