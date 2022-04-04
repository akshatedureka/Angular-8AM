import { Component } from "@angular/core";

@Component({
    selector:"ngmodel1",
    templateUrl:"./ngmodel1.directive.html"
})

class NgModel1Directive{
    user_details:any = {
        "fname":"",
        "lname":"",
        "email":"",
        "mobile":"",
        "address":""
    }
}
export default NgModel1Directive;