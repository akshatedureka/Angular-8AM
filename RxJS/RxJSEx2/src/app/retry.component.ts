import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { delay, retry } from "rxjs";

@Component({
    selector:"retry-ex",
    templateUrl:"./retry.component.html"
})

class RetryComponent{

    res:any;

    constructor(private http:HttpClient){}

    ngOnInit(){
        this.http.get("https://www.w3schools.com/angular/customers.ph").pipe(retry(10)).subscribe((posRes)=>{
            this.res = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        })
    }
}
export default RetryComponent;