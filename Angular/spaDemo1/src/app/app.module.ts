import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import AuthGuards from './auth.routes';
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
    RouterModule.forRoot([{path:"page_one/:p_id/:p_name/:p_cost",component:PageoneComponent,children:[{path:"child_one",component:ChildoneComponent}],canActivate:[AuthGuards]},
                          {path:"page_two",component:PagetwoComponent,children:[{path:"child_two",component:ChildtwoComponent}],
                           canDeactivate:[AuthGuards]},
                          {path:"page_three/:p_id/:p_name/:p_cost",component:PagethreeComponent,
                           children:[{path:"child_three",component:ChildthreeComponent}],
                          canActivateChild:[AuthGuards]}])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
