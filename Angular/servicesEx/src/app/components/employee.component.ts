import { Component } from "@angular/core";
import EmployeeService from "../services/employee.service";
@Component({
    selector:"employee",
    templateUrl:"./employee.component.html",
    styleUrls:["./employee.component.css"]
})
class EmployeeComponent{

    products!:any[];

    constructor(private my_obj:EmployeeService){}

    ngOnInit(){
        this.products = this.my_obj.employeeData();
    }

    

}
export default EmployeeComponent;