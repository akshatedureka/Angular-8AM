import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"pageone",
    templateUrl:"./pageone.component.html"
})
class PageoneComponent{
    var_one:any;
    constructor(private route:ActivatedRoute){
        this.var_one = this.route.snapshot.params["p_id"]+"...."+this.route.snapshot.params["p_name"]+"...."+this.route.snapshot.params["p_cost"];
    }
}
export default PageoneComponent;