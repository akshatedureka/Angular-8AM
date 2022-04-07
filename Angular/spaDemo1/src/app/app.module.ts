import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import ChildoneComponent from './childone.component';
import ChildthreeComponent from './childthree.component';
import ChildtwoComponent from './childtwo.component';
import MasterComponent from './master.component';
import PageoneComponent from './pageone.compoenent';
import PagethreeComponent from './pagethree.component';
import PagetwoComponent from './pagetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"page_one",component:PageoneComponent,children:[{path:"child_one",component:ChildoneComponent}]},
                          {path:"page_two",component:PagetwoComponent,children:[{path:"child_two",component:ChildtwoComponent}]},
                          {path:"page_three",component:PagethreeComponent,children:[{path:"child_three",component:ChildthreeComponent}]}])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
