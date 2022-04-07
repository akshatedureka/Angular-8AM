import { Component } from "@angular/core";

@Component({
    selector:"pagethree",
    templateUrl:"./pagethree.component.html"
})
class PagethreeComponent{
    var_three:any;
    constructor(){
        this.var_three = "Pagethree !!!";
    }
}
export default PagethreeComponent;