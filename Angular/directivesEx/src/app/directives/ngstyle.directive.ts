import { Component } from "@angular/core";

@Component({
    selector:"ngstyle",
    templateUrl:"./ngstyle.directive.html"
})

class NgStyleDirective{
    var_one:string = "Angular14";
    var_two:string = "ReactJS";
    arr:any[] = [
        {"p_id":111,"p_name":"p_one","p_cost":10000},
        {"p_id":222,"p_name":"p_two","p_cost":20000},
        {"p_id":333,"p_name":"p_three","p_cost":30000},
        {"p_id":444,"p_name":"p_four","p_cost":40000},
        {"p_id":555,"p_name":"p_five","p_cost":50000}
    ];

    myFun(id:any){
        switch(id){
            case 111:
                return 'red';
            case 222:
                return 'green';
            case 333:
                return 'yellow';
            case 444:
                return 'grey';
            case 555:
                return 'pink';
            default:
                return 'black';
        }
    }

    myFun1(name:any){
        switch(name){
            case 'p_one':
                return '20px';
            case 'p_two':
                return '30px';
            case 'p_three':
                return '40px';
            case 'p_four':
                return '50px';
            case 'p_five':
                return '60px';
            default:
                return '10px';
        }
    }


}

export default NgStyleDirective;