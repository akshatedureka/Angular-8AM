import { Component } from "@angular/core";

/*
    [ngClass] directive, used to apply the bootstrap
*/
@Component({
    selector:"ngclass",
    templateUrl:"./ngclass.directive.html"
})
class NgClassDirective{
    var_one:string = "Hello_1";
    var_two:string = "Hello_2";
}
export default NgClassDirective;