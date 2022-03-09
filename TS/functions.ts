//function
//particular "business logic" called as "function"
//functions are used to "reuse" the "business logic"
//function with particular name(use defined) called as "named" function
//function without name called as "anonymous" function

/*
    named functions
    ***************
    Syntax

    1) function definition

    2) function calling


    function definition
    *******************
    function functionname(param1:datatype,param2:datatype,param3:datatype,.....paramn:datatype):returntype{
        business logic
    }


    function calling
    ****************
    functionname(arg1,arg2,arg3,.....arg n);
*/

/*
    function fun_one():void{
        console.log("welcome to named functions");
    }

    fun_one();
*/


/*
    function fun_one(param1:any,param2:any,param3:any):any{
        console.log( param1, param2, param3 );
    }

    //fun_one();                                //Expected 3 arguments, but got 0.
    fun_one("Hello_1","Hello_2","Hello_3");     //Hello_1 Hello_2 Hello_3
    fun_one(100,200,300);                       //100 200 300
    fun_one(undefined,undefined,undefined);     //undefined undefined undefined
    fun_one(null,null,null);                    //null null null
*/

/*
    //... called as spread operator
    //spread operator introduced in ES6
    //... operator used to hold the more than one value
    //default value of spread operator is []
    function fun_one(...param1:any):void{
        console.log(param1);
    }
    fun_one(100,200);                                   //[ 100, 200 ]
    fun_one("Hello_1","Hello_2","Hello_3");             //[ 'Hello_1', 'Hello_2', 'Hello_3' ]
    fun_one();                                          //[]
    fun_one(undefined);                                 //[ undefined ]
    fun_one(null);                                      //[ null ]
*/

/*
    function fun_one(...param1:any,...param2:any):any{}
    //we can have only one spread operator per funtion
*/


/*
    function fun_one(...param2:any,param1:any):any{}
    //rest parameter position should be last in occurances
*/

/*
    function fun_one(param1:string,...param2:string[]):void{
        console.log( param1, param2 );
    }
    //fun_one();                  //Expected at least 1 arguments, but got 0.
    fun_one("Hello_1");           //Hello_1 []
    fun_one("Hello_1","Hello_2"); //Hello_1 [ 'Hello_2' ]
    fun_one(undefined,undefined); //undefined [ undefined ]
    fun_one(null,null);           //null [ null ]
*/


/*
    //default parameters in functions
    //while defining the functions, we will inilize the parameters in with default values
    //ES6
    function fun_one(param1:string="Hello_1",param2:string="Hello_2",param3:string="Hello_3"):void{
        console.log( param1, param2, param3 );
    }
    fun_one();                                          //Hello_1 Hello_2 Hello_3
    fun_one("Welcome_1","Welcome_2","Welcome_3");       //Welcome_1 Welcome_2 Welcome_3
    fun_one(undefined,undefined,undefined);             //Hello_1 Hello_2 Hello_3
    fun_one("Welcome_1",undefined,"Welcome_3");         //Welcome_1 Hello_2 Welcome_3
    fun_one(null,null,null);                            //null null null
*/



/*
    function fun_one(param1:any,param2:any="Hello_2",...param3:any):void{
        console.log( param1, param2, param3 );
    }
    //fun_one();                                        //Expected at least 1 arguments, but got 0.
    fun_one("Hello_1");                                 //Hello_1 Hello_2 []
    fun_one(undefined,undefined,undefined);             //undefined Hello_2 [ undefined ]
    fun_one(null,null,null);                            //null null [ null ]
*/


//optional parameters
//while calling the "fucntions", we will make few "parameters" are "optional"
//"ES6"
//we will represent optional parameters with "?"

/*
    function fun_one(param1?:string,param2?:string,param3?:string):void{
        console.log(param1, param2, param3 );
    };
    fun_one();                                     //undefined undefined undefined
    fun_one("Hello_1");                            //Hello_1 undefined undefined
    fun_one("Hello_1","Hello_2","Hello_3");        //Hello_1 Hello_2 Hello_3
    fun_one(undefined,undefined,"Hello_3");        //undefined undefined Hello_3
    fun_one(null,null,null);                       //null null null
*/


/*
    function fun_one(param1:string | number, param2:string | number = "Hello_2", param3?:string,...param4:string[]):void{
        console.log( param1, param2, param3, param4 );
    }
    //fun_one();                                                                  //Expected at least 1 arguments, but got 0.
    fun_one("Hello_1");                                                           //Hello_1 Hello_2 undefined []
    fun_one(undefined,undefined,undefined,undefined);                             //undefined Hello_2 undefined [ undefined ]
    fun_one(null,null,null,null);                                                 //null null null [ null ]
*/



//Anonymous Functions
//The function "without" name called as "Anonymous" Function
//Anonymous functions also called as "arrow" functions
//Arrow Functions introduced in "ES6"
//we will represent "Arrow" Functions with "=>"
//Arrow Functions Behaves like "callback" functions

/*
    Syntax
    ******
    1) Function Definition

    2) Function Calling


    Function Definition
    *******************
    let variablename = (p1:dt,p2:dt,.....pn:dt):returntype=>{
        business logic
    }

    Function Calling
    ****************
    variablename(arg1,arg2,.....arg n);
*/

/*
    let fun_one = ():void=>{
        console.log("welcome to arrow functions");
    }
    fun_one();              //welcome to arrow functions
*/


/*
    let fun_one = (param1:string,param2:string,param3:string):void=>{
        console.log( param1, param2, param3 );
    }
    fun_one("Hello_1","Hello_2","Hello_3");             //Hello_1 Hello_2 Hello_3
    fun_one( undefined,undefined,undefined );           //undefined undefined undefined
    fun_one(null,null,null);                            //null null null
*/


/*
    let fun_one = ():any=>"Hello";
    console.log( fun_one() );
*/


let my_fun = (param1:any,param2:any):void=>{
    param1();
    param2();
}

my_fun( ():void=>{ console.log("Success") }, 
        ():void=>{ console.log("Fail") } );
//Success
//Fail
























































































































































































































































