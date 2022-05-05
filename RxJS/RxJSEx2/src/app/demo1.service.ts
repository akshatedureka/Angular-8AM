import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
class Demo1Service{
    constructor(private http:HttpClient){}
    public getData():Observable<any>{
        return this.http.get("https://www.w3schools.com/angular/customers.php");
    }
}
export default Demo1Service;