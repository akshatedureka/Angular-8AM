//variables are used to store the "data"
//Ex. string, number, boolean, arrays, undefined, null, arrays, objects
//we can declare variables with the help of var/let/const keyword
//let & const keywords introduced in "ES6"
//variables declaration should contain a-z, A-Z, 0-9, $ and _
//variables declaration should not start with digits
/*
    Syntax
    ******
    var/let/const variablename:datatype = value;

    Ex.
    ***
    var msg:string = "welcome to ashokit";
    console.log(msg);
*/

//string
//string is "datatype"
//collection of "characters" called as "string"
//we can declare the string in "3 ways"
//1) ""  (double quotes)
//2) '' (single quotes)
//3) ``(backtick)
//``(backtick) operator called as "template literal"
//``(backtick) operator used to define the "paragraphs"
var sub1:string = "Angular14";
var sub2:string = "NodeJS";
var sub3:string = "MongoDB"; 
var mean:string = `${sub1}......${sub2}......${sub3}`; 
console.log( mean );


var _table:string = "products";
var product_cost:number = 10000;
var sql_query:string = `select * from ${_table} where pcost>${product_cost}`;
console.log(sql_query);
//select * from products where pcost>10000



//number
//1) decimal
//2) double
//3) hexadecimal  --- prefix with 0x
//4) octal        --- prefix with 0o
//5) binary       --- prefix with 0b
var decimal_number:number = 100;
var double_number:number = 100.12345;
var hexadecimal_number:number = 0x123ABC;
var octal_number:number = 0o123;
var binary_number:number = 0b1010;
console.log( decimal_number, double_number, hexadecimal_number, octal_number, binary_number );
//100 100.12345 1194684 83 10



//array
//collection of indexed elements called as array
//[]
//index starts from 0

//number array
var num_arr1:number[] = [100,200,300,400,500];
var num_arr2:Array<number> = [600,700,800,900,1000]; 
//iterate
//forEach()
num_arr1.forEach((element,index)=>{
    console.log( element, num_arr2[index] );
})


//string array
var str_arr1:string[] = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
var str_arr2:Array<string> = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];
str_arr1.forEach((element,index)=>{
    console.log( element, str_arr2[index] );
});


//boolean array
var bool_arr1:boolean[] = [true,false,true,false,true];
var bool_arr2:Array<boolean> = [false,true,false,true,false];



//JSON
//Java Script Object Notation
//JavaScript "Objects"
//JSON, used to transfer the data over the Network
//JSON is "light" weight
//JSON datatype in typescript is "any"
//Objects --- {}
//Arrays  --- []
//data    --- key & value pairs
var obj1:any = {
    sub_one : "Angular14",
    sub_two : "NodeJS",
    sub_three : "MongoDB"
};
console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );
//Angular14 NodeJS MongoDB
console.log( obj1["sub_one"], obj1["sub_two"], obj1["sub_three"] );
//Angular14 NodeJS MongoDB



var var1:string | number = "Hello";
var1 = 1000;
console.log(var1);              //1000



var var2:any = "welcome to variables in typescript";
console.log( var2 );
//welcome to variables in typescript



var arr3:any[] = [
    {"p_id":111,"p_name":"p_one","p_cost":10000},
    {"p_id":222,"p_name":"p_two","p_cost":20000},
    {"p_id":333,"p_name":"p_three","p_cost":30000},
    {"p_id":444,"p_name":"p_four","p_cost":40000},
    {"p_id":555,"p_name":"p_five","p_cost":50000}
];
arr3.forEach((element,index)=>{
    console.log( element.p_id, element.p_name, element.p_cost, index );
});

































































































