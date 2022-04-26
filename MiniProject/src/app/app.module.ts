import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import LoadingComponent from './components/loading.component';
import MessageComponent from './components/message.component';
import ProductsComponent from './components/products.component';
import RatingComponent from './components/rating.component';
import productsEffects from './effects/products.effects';
import { productsReducer } from './reducer/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    MessageComponent,
    RatingComponent,
    ProductsComponent
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
