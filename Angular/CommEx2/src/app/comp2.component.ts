import { Component } from "@angular/core";

@Component({
    selector:"comp2",
    templateUrl:"./comp2.component.html"
})

class Comp2Component{
    var_one!:string;
    var_two!:string;
    constructor(){
        this.var_one = "Hello_1";
        this.var_two = "Hello_2";
    }
}

export default Comp2Component;