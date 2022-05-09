import { Component } from "@angular/core";
import DemoService from "../service/demo.service";

@Component({
    selector:"demo",
    templateUrl:"./demo.component.html"
})

class DemoComponent{
    flag:boolean = false;
    constructor(private service:DemoService){}

    clickMe(){
         this.service.myFun1().subscribe(data=>this.flag = data);
    }
}
export default DemoComponent;