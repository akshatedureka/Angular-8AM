import { Component } from "@angular/core";

@Component({
    selector:"ngsubmit",
    templateUrl:"./ngsubmit.directive.html"
})

class NgSubmitDirective{
    login_details:any = {
        "uname":"",
        "upwd":""
    };

    login(){
        if(this.login_details.uname === "admin" &&
            this.login_details.upwd === "admin123"){
                alert("Login Success");
        }else{
            alert("Login Fail");
        }
    }
}

export default NgSubmitDirective;