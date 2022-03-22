import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './child/footer.component';
import HeaderComponent from './child/header.component';
import MainComponent from './child/main.component';
import { MasterComponent } from './parent/master.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MasterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
