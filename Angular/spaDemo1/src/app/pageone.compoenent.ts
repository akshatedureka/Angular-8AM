import { Component } from "@angular/core";

@Component({
    selector:"pageone",
    templateUrl:"./pageone.component.html"
})
class PageoneComponent{
    var_one:any;
    constructor(){
        this.var_one = "Pageone !!!";
    }
}
export default PageoneComponent;