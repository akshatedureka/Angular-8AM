import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
class Demo2Service{
    constructor(private http:HttpClient){}
    public getData():Observable<any>{
        return this.http.get("https://reqres.in/api/users?page=2");
    }
}
export default Demo2Service;