// import { var_one } from "./example1";
// console.log( var_one );



// import var_one from "./example1";
// console.log( var_one );             //Welcome


// import { sub_one,sub_two,sub_three } from "./example1";
// console.log( sub_one, sub_two, sub_three );
// //Angular14 NodeJS MongoDB


// import * as subjects from "./example1";
// //destructuring
// const {sub_one,sub_two,sub_three} = subjects;
// console.log( sub_one, sub_two, sub_three );














// import my_fun from "./example1";
// let obj:any = my_fun();
// const {sub_one,sub_two,sub_three} = obj;
// console.log( sub_one, sub_two, sub_three );
// //Angular14 NodeJS MongoDB















// import class_one from "./example1";
// let obj:class_one = new class_one("Hello_1","Hello_2","Hello_3");
// console.log( obj.param1, obj.param2, obj.param3 );
//Hello_1 Hello_2 Hello_3



import interface1 from "./example1";
//interfaces implementations known by either JSON or Classes
//JSON
export let obj:interface1 = {
    var_one : "Hello_1",
    var_two : "Hello_2",
    var_three : "Hello_3",
    fun_one : ():string=>{
        return "Hello_4";
    },
    fun_two : ():string=>{
        return "Hello_5";
    },
    fun_three : ():string=>{
        return "Hello_6"
    }
};


//CLASSES
export class class_one implements interface1{
    var_one: string = "Hello_1";
    var_two: string = "Hello_2";
    var_three: string = "Hello_3";
    fun_one(): string {
        return "Hello_4";
    }
    fun_two(): string {
        return "Hello_5";
    }
    fun_three(): string {
        return "Hello_6";
    }
}




































