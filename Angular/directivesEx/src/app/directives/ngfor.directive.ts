import { Component } from "@angular/core";

interface Product{
    p_id:number;
    p_name:string;
    p_cost:number;
}



@Component({
    selector:"ngforex",
    templateUrl:"./ngfor.directive.html"
})


export default class NgForDirective{
    arr1:number[] = [10,20,30,40,50,60,70,80,90,100];

    arr2:Product[] = [{p_id:111,p_name:"p_one",p_cost:10000},
                      {p_id:222,p_name:"p_two",p_cost:20000},
                      {p_id:333,p_name:"p_three",p_cost:30000},
                      {p_id:444,p_name:"p_four",p_cost:40000},
                      {p_id:555,p_name:"p_five",p_cost:50000}]



}

