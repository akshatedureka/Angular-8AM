import { Injectable } from "@angular/core";

//import HttpClient
//HttpClient used to make the "service calls"
import { HttpClient } from "@angular/common/http";


//import Observable
//Observable used to make asynchronous calls
//Observable available in rxjs package
//reactive extension javascript
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
class CustomerService{
    constructor(private http:HttpClient){}
    public getCustomers():Observable<any>{
        return this.http.get(`https://www.w3schools.com/angular/customers.php`);
    }
}
export default CustomerService;

