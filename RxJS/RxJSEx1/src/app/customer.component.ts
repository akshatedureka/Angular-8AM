import { Component } from "@angular/core";

import Customers from "./customer.model";
import CustomerService from "./customer.service";
@Component({
    selector:"customer",
    templateUrl:"./customer.component.html"
})
class CustomerComponent{
    
    result!:Customers;

    subscription!:any;
    
    constructor(private service:CustomerService){}

    ngOnInit(){
            // this.subscription = this.service.getCustomers().subscribe((posRes:Customers)=>{
            //         this.result = posRes;
            // },(errRes)=>{
            //         console.log(errRes);
            // });

            this.subscription = this.service.getCustomers();
    }


    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
export default CustomerComponent;