import { Component } from "@angular/core";
@Component({
    selector : "ashokit",
    templateUrl : "./first.component.html"
})
class FirstComponent{
    private sub_one!:string;
    private sub_two!:string;
    private sub_three!:string;
    constructor(){
        this.sub_one = "Angular14";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    };
    public getSubOne():string{
        return this.sub_one;
    };
    public getSubTwo():string{
        return this.sub_two;
    };
    public getSubThree():string{
        return this.sub_three;
    };
}
export default FirstComponent;