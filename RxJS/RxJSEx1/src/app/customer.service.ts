import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Customers from "./customer.model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn:"root"
})
class CustomerService{
    constructor(private http:HttpClient){}
    public getCustomers():Observable<Customers>{
        return this.http.get<Customers>(environment.base_url);
    }
}
export default CustomerService;