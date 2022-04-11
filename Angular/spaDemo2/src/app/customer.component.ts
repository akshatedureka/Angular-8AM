import { Component } from "@angular/core";
import CustomerService from "./customer.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"customer",
    templateUrl:"./customer.component.html"
})
class CustomerComponent{

    result:any;

    constructor(private service:CustomerService){}

    ngOnInit(){
        this.service.getCustomers().subscribe((posRes:any)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side errors");   
            }else{
                console.log("server side errors");
            }
        });
    }
}
export default CustomerComponent;