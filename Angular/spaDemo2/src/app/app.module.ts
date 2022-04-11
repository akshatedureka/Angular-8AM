import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import AuthService from './auth.service';
import MasterComponent from './master.component';
import PageoneComponent from './pageone.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PageoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"page_one",component:PageoneComponent},
                          {path:"lazy",loadChildren:()=>import("./customer.module").then((obj)=>{ return obj.CustomerModule}),
                           canLoad:[AuthService]}])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
