import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"pagethree",
    templateUrl:"./pagethree.component.html"
})
class PagethreeComponent{
    var_three:any;
    constructor(private route:ActivatedRoute){
        this.var_three = this.route.snapshot.params["p_id"]+"...."+
                         this.route.snapshot.params["p_name"]+"...."+
                         this.route.snapshot.params["p_cost"];
    }
}
export default PagethreeComponent;