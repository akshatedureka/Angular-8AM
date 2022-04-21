import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

class tokenIntreceptor{
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        const req1 = req.clone({
           setHeaders:{
               token : "abc123"
           }
        })
        return handler.handle(req1);
    }
}

export default tokenIntreceptor;