import { Component, QueryList, ViewChild, ViewChildren } from "@angular/core";
import Comp2Component from "./comp2.component";

@Component({
    selector:"comp1",
    templateUrl:"./comp1.component.html"
})
class Comp1Component{
    // @ViewChild(Comp2Component,{static:true})
    // private obj:Comp2Component;

    // clickMe(){
    //     this.obj.var_one = "Welcome_1";
    //     this.obj.var_two = "Welcome_2";
    // }


    @ViewChildren(Comp2Component) mapObj:QueryList<Comp2Component> = new QueryList();
    arr:any[];

    ngAfterViewInit(){
        this.arr = this.mapObj.toArray();
    }

    clickMe(){
        for(let i=0;i<this.arr.length;i++){
            this.arr[i].var_one = "Welcome_1";
            this.arr[i].var_two = "Welcome_2";
        }
    }










}
export default Comp1Component;