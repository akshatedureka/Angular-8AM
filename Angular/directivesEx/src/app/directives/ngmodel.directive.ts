import { Component } from "@angular/core";

@Component({
    selector:"ngmodel",
    templateUrl:"./ngmodel.directive.html"
})

class NgModelDirective{
    
    login_details:any = {
        "uname":"",
        "upwd":""
    };

    status!:string;

    login(){
        this.status = this.login_details.uname === "ashokit" && this.login_details.upwd === "ashokit123" ? "Login Success" : "Login Fail";
    }
}

export default NgModelDirective;