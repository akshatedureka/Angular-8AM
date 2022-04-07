import { Component } from "@angular/core";

@Component({
    selector:"childone",
    templateUrl:"./childone.component.html"
})
class ChildoneComponent{
    var_four:any;
    constructor(){
        this.var_four = "child one !!!";
    }
}

export default ChildoneComponent;