import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { Observable } from "rxjs";
import { Login } from "../model/login.model";
@Injectable({
    providedIn:"root"
})

export class loginService{
    constructor(private http:HttpClient){}

    public login_fn(login_details:User):Observable<Login>{
        return this.http.post<Login>(`http://localhost:8080/login`,login_details);
    }
}