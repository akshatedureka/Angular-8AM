import { Component } from "@angular/core";
import DemoService from "../services/demo.service";
@Component({
    selector:"app-demo",
    templateUrl:"./demo.component.html"
})
class DemoComponent{
    result!:number;
    constructor(private service:DemoService){}
    addition(num1:any,num2:any){
        this.result = this.service.add(parseInt(num1),parseInt(num2));
    }
}
export default DemoComponent;