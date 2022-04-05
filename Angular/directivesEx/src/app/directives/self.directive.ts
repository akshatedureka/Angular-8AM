import { Component } from "@angular/core";

@Component({
    selector:"self",
    templateUrl:"./self.directive.html"
})

class SelfDirective{
    login(arg1:any,arg2:any){
        console.log(arg1, arg2);
    }
}   

export default SelfDirective;