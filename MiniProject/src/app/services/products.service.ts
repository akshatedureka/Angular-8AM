import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Product from "../model/products.model";
import { environment } from "src/environments/environment.prod";
@Injectable({
    providedIn:"root"
})

class productsService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(environment.URL);
    }
}
export default productsService;