import { Component } from "@angular/core";

@Component({
    selector:"childthree",
    templateUrl:"./childthree.component.html"
})
class ChildthreeComponent{
    var_six:any;
    constructor(){
        this.var_six = "child three !!!";
    }
}

export default ChildthreeComponent;