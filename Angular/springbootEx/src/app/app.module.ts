import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { productsEffects } from './effects/products.effects';
import { productsReducer } from './reducer/products.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([productsEffects]),
    StoreModule.forRoot({"products":productsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
