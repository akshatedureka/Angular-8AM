import { Component } from "@angular/core";

@Component({
    selector:"forandif",
    templateUrl:"./forandif.directive.html"
})

class ForandIf{
    arr!:string[];
    constructor(){
        this.arr = ['Hello_1','Hello_2','Hello_3','Hello_4','Hello_5'];
    }
}
export default ForandIf;