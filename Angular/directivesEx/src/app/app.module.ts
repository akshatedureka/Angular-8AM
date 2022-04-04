import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import ClickDirective from './directives/click.directive';
import ForandIf from './directives/forandif.directive';
import NgForDirective from './directives/ngfor.directive';
import NgIfDirective from './directives/ngif.directive';
import NgModelDirective from './directives/ngmodel.directive';
import NgModel1Directive from './directives/ngmodel1.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForDirective,
    NgIfDirective,
    ForandIf,
    NgModelDirective,
    NgModel1Directive,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ClickDirective]
})
export class AppModule { }
