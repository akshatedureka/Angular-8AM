import { Component } from "@angular/core";

@Component({
    selector:"pagetwo",
    templateUrl:"./pagetwo.component.html"
})
class PagetwoComponent{
    var_two:any;
    constructor(){
        this.var_two = "Pagetwo !!!";
    }
}
export default PagetwoComponent;