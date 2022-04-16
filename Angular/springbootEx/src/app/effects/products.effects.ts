import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap,map, of } from "rxjs";
import { productsList, productsListFail, productsListSuccess } from "../actions/products.actions";
import Product from "../model/products.model";
import { productsService } from "../services/products.service";

@Injectable({
    providedIn:"root"
})
export class productsEffects{
    constructor(private actions$:Actions,
                private service:productsService){}

    products$ = createEffect(()=> this.actions$.pipe(
        ofType(productsList),
        mergeMap(()=> this.service.getProducts().pipe(map((posRes:Product[])=>{
            return productsListSuccess({"products":posRes});
        }),catchError((err)=>of(productsListFail({"error":"Network Error"})))))
    ))
}