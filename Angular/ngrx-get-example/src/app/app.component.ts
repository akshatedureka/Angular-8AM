import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customersList } from './actions/customers.actions';
import Customers from './model/customers.model';
import { customersSelector } from './selector/customers.selector';
import CustomersState from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-get-example';
  loading!:boolean;
  customers!:Customers;
  error!:string;
  constructor(private store:Store<CustomersState>){}
  ngOnInit(){
      //dispath
      this._dispatch();    
    
      //subscription
      this._subscription();   

  }


  _dispatch(){
    this.store.dispatch(customersList());
  }

  _subscription(){
      this.store.select(customersSelector).subscribe((posRes:CustomersState)=>{
          const {loading,customers,error} = posRes;
          this.loading = loading;
          this.customers = customers;
          this.error = error;
      },(errRes)=>{
        console.log(errRes);
      });
  }




}
