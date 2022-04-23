import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsListAction } from './actions/products.actions';
import Product from './model/products.model';
import { productsSelector } from './selector/products.selector';
import ProductsState from './state/products.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'MiniProject';
    constructor(private store:Store<ProductsState>){}

    loading!:boolean;
    error!:string;
    products!:Product[];

    _subscription(){
      this.store.select(productsSelector).subscribe((posRes)=>{
          console.log(posRes);
          const {loading,error,products} = posRes;
          this.loading =   loading;
          this.error = error;
          this.products = products;
      },(errRes)=>{
        console.log(errRes);
      });
    }

    _dispatch(){
      this.store.dispatch(productsListAction());
    }


    ngOnInit(){
        this._subscription();
        this._dispatch();
    }




}
