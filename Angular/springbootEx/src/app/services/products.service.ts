import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import Product from "../model/products.model";
@Injectable({
    providedIn:"root"
})
export class productsService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>("http://localhost:5000/api/v1/products");
    }
}