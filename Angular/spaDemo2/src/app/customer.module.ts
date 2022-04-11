import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import CustomerComponent from "./customer.component";
import CustomerService from "./customer.service";

@NgModule({
    declarations:[CustomerComponent],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:"",component:CustomerComponent}])],
    providers:[CustomerService],
    exports:[CustomerComponent]
})
export class CustomerModule{}
