import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsList } from './actions/products.actions';
import Product from './model/products.model';
import { productsSelector } from './selector/products.selector';
import ProductsState from './state/products.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'springbootEx';
    constructor(private store:Store<ProductsState>){}

    ngOnInit(){
       this._subscription();

       this._dispatch();
    }

    _dispatch(){
      this.store.dispatch(productsList());
    }

    loading!:boolean;
    products!:Product[];
    error!:string;

    _subscription(){
      this.store.select(productsSelector).subscribe((posRes)=>{
          const {loading,products,error} = posRes;
          this.loading = loading;
          this.products = products;
          this.error = error;

      },(errRes)=>{
          console.log(errRes);
      })
    }



}
