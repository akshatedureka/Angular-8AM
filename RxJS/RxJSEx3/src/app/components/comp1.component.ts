import { Component } from "@angular/core";
import MyService from "../service/my.service";
@Component({
    selector:"comp1",
    templateUrl:"./comp1.component.html"
})
 class Comp1Component{
    constructor(private service:MyService){}
    fun_one(data:string){
        this.service.receiveMsg(data);
    }
 }
 export default Comp1Component;