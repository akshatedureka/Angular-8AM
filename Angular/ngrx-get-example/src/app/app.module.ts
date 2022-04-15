import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import CustomersEffects from './effects/customers.effects';
import { customersReducer } from './reducer/customers.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([CustomersEffects]),
    StoreModule.forRoot({"customers":customersReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
