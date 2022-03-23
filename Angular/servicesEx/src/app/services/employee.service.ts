//import Injectable
//Injectable is the predefined class
//Injectable used to create the service
import { Injectable } from "@angular/core";

//use the Injectable
@Injectable({
    providedIn:"root"
})

//create the service
class EmployeeService{
    public employeeData():any[]{
        return [{name:"shirt1",cost:"$100.00","rating":4.0,brand:"polo",image:"https://redux-bucket.s3.amazonaws.com/shirt1.jpg"},
                {name:"shirt2",cost:"$200.00","rating":3.0,brand:"Niki",image:"https://redux-bucket.s3.amazonaws.com/shirt2.jpg"},
                {name:"shirt3",cost:"$300.00","rating":2.0,brand:"polo",image:"https://redux-bucket.s3.amazonaws.com/shirt3.jpg"},
                {name:"pant1",cost:"$400.00","rating":5.0,brand:"American",image:"https://redux-bucket.s3.amazonaws.com/pant1.jpg"},
                {name:"pant2",cost:"$500.00","rating":4.0,brand:"Polo",image:"https://redux-bucket.s3.amazonaws.com/pant2.jpg"},
                {name:"pant3","cost":"$600.00","rating":5.0,brand:"American",image:"https://redux-bucket.s3.amazonaws.com/pant3.jpg"}];
    }
}

//export the service
export default EmployeeService;