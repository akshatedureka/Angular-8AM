import { Component } from "@angular/core";
@Component({
    selector:"pageone",
    templateUrl:"./pageone.component.html"
})
class PageoneComponent{
    var_one!:string;
    constructor(){
        this.var_one = "Page One !!!";
    }
}
export default PageoneComponent;
