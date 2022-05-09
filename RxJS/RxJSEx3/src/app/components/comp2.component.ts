import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import MyService from "../service/my.service";
@Component({
    selector:"comp2",
    templateUrl:"./comp2.component.html"
})
class Comp2Component{
    message!:string;
    sub$!:Subscription;
    constructor(private service:MyService){}
    ngOnInit(){
        this.sub$ = this.service.sendMsg().subscribe(data=>this.message = data);
    }
    ngOnDestroy(){
        this.sub$.unsubscribe();
    }
}

export default Comp2Component;