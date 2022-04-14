import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { customersList, customersListFail, customersListSuccess } from "../actions/customers.actions";
import Customers from "../model/customers.model";
import CustomersService from "../services/customers.service";
@Injectable({
    providedIn:"root"
})
class CustomersEffects{
    constructor(private actions$:Actions,
                private service:CustomersService){}

    customers$ = createEffect(()=>this.actions$.pipe(
        ofType(customersList),
        mergeMap(()=> this.service.getCustomers().pipe(map((posRes:Customers)=>{
            return customersListSuccess({"customers":posRes})
        }),catchError((errRes)=>of(customersListFail({"error":"Network Error"})))))
    ));



}
export default CustomersEffects;