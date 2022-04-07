import { Component } from "@angular/core";

@Component({
    selector:"childtwo",
    templateUrl:"./childtwo.component.html"
})
class ChildtwoComponent{
    var_five:any;
    constructor(){
        this.var_five = "child two !!!";
    }
}

export default ChildtwoComponent;