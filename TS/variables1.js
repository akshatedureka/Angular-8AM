//"let" keyword
//let keyword introduced in "ES6"
//let keyword, used to "declare" the variables


/*
    //differences
    for(let i=0;i<5;i++){
        
    }

    console.log(i);                     
    //var:5   let:ReferenceError: i is not defined

    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //global variable
    let data = 100;
    //block
    {
        //local variable
        let data = 200;
    }
    console.log( data );            //var:200       //let:100

    //var keyword raises the global polluting issue
    //let keyword overcomes the global polluting issue
    //effect on global members with block of code called as global polluting issue
*/




/*
    //print variable
    //R-1 : declare the variable
    //R-2 : initilize the variable
    //R-3 : access the variable
    console.log( data );                //var:undefined   let:ReferenceError: Cannot access 'data' before initialization
    let data = 100;
    //accessing the variables before it's declaration and initilization called as variable hoisting
    //variable hoisting raised the undefined as value
    //variable hoisting raised because of "var" keyword
    //we can overcome variable hoisting with the help of "let" keyword
*/

/*
    let data = 100;
    let data = 200;
    console.log( data );            //var:200   let:SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/


/*
                    var                                 let
    var keyword introduced in ES1               let keyword introduced in ES6

    var keyword breaks the scope rule           let keyword obeys the scope rule
    
    global polluting issue raised by            we van overcome global polluting issue by using
    var keyword                                 let keyword

    variable hoisting issue raised              we can overcome variable hoisting by using "let" keyword
    by var keyword

    duplicate variables allowed by var          we can overcome duplicate variables by using let keyword
    keyword

    var members called as global                let members called as local members
    members
*/


//const keyword
//const keyword introduced in "ES6"
//const keyword used to "declare" the variables
//"reinitlization" not possible with "const" keyword
const data = 100;
//data = 200;                 //TypeError: Assignment to constant variable.


const arr = [10,20,30,40,50];
//arr = [];                   //TypeError: Assignment to constant variable.
arr[0] = 100;
arr[4] = 500;
console.log(arr);               //[ 100, 20, 30, 40, 500 ]


const obj = {
    "sub_one" : "Angular13",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
//obj = {};
//TypeError: Assignment to constant variable.

obj["sub_one"] = "Angular14";
obj["sub_two"] = "Go";
obj["sub_three"] = "CassandraDB";
console.log(obj);
//{ sub_one: 'Angular14', sub_two: 'Go', sub_three: 'CassandraDB' }
























































