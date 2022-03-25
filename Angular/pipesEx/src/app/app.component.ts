import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pipesEx';
    var_one:string = "ashokit";
    var_two:string = "ANGULAR14";
    var_three:string = "ashok it";
    var_four:number = 100;
    var_five:number = 0.8;
    var_six:any = {"sub_one":"Angular14",
                   "sub_two":"NodeJS",
                  "sub_three":"MongoDB"};
    var_seven:number = 100.12345;
    var_eight:number[] = [10,20,30,40,50];
    //promises
    //to implement "async" calls
    //1) promise creation
    //2) promise consumption
    //"Promise" class, used to create the Promises
    //Consume the promises 1) then()   2) async & await
    //async pipe
    var_nine:any;
    constructor(){
        this.var_nine = new Promise((resolve,reject)=>{
            setTimeout(()=>{
              resolve("Hello");
            },5000);
        })
    }
    
    var_ten:Date = new Date();

    data1:string = "Hello";
    
    data2:string = "welcome to angular14";


}
