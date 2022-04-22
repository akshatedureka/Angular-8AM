import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { mergeMap,map, catchError, of } from "rxjs";
import { productsListAction, productsListActionFail, productsListActionSuccess } from "../actions/products.actions";
import Product from "../model/products.model";
import productsService from "../services/products.service";

@Injectable({
    providedIn:"root"
})

class productsEffects{
    constructor(private actions$:Actions,
                private service:productsService){}
                
    products$ = createEffect(()=> this.actions$.pipe(
        ofType(productsListAction),
        mergeMap(()=> this.service.getProducts().pipe(map((posRes:Product[])=>{
            return productsListActionSuccess({"products":posRes});
        }),catchError((err)=> of(productsListActionFail({"error":"Network Error"})))))
    ));
}

export default productsEffects;