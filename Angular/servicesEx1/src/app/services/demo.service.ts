import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
class DemoService{
    public add(num1:number,num2:number):number{
        return num1+num2;
    }
}
export default DemoService;