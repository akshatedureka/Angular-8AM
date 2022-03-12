/*
    interface interface1{
        sub_one:string;
        sub_two:string;
        sub_three:string;
    }

    let obj1:interface1 = {
        sub_one : "Angular14",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    }
    console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );
    //Angular14 NodeJS MongoDB

    let obj2:interface1 = {
        sub_one : "ReactJS",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    }
    console.log( obj2.sub_one, obj2.sub_two, obj2.sub_three );
    //ReactJS NodeJS MongoDB

    class class_one implements interface1{
        sub_one: string = "VueJS";
        sub_two: string = "Go";
        sub_three: string = "MongoDB";
    }

    let obj:class_one = new class_one();
    console.log( obj.sub_one, obj.sub_two, obj.sub_three );
    //VueJS Go MongoDB
*/

/*
    interface interface1{
        fun_one():string;
        fun_two():string;
        fun_three():string;
    };

    //class
    class class_one implements interface1{
        fun_one():string{
            return "Hello_1";
        }
        fun_two(): string {
            return "Hello_2";
        }
        fun_three(): string {
            return "Hello_3";
        }
    };
    let obj1:class_one = new class_one();
    console.log( obj1.fun_one(), obj1.fun_two(), obj1.fun_three() );
    //Hello_1 Hello_2 Hello_3


    //json
    let obj:interface1 = {
        fun_one : ():string=>{
            return "Hello_1";
        },
        fun_two : ():string=>{
            return "Hello_2";
        },
        fun_three : ():string=>{
            return "Hello_3";
        }
    };
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
    //Hello_1 Hello_2 Hello_3
*/


/*
    interface interface1{
        fun_one():any;
    }
    interface interface2 extends interface1{
        fun_two():any;
    }
    let obj:interface2 = {
        fun_one : ():any=>{
            return {"msg":"Hello_1"};
        },
        fun_two : ():any=>{
            return {"msg":"Hello_2"};
        }
    };
    console.log( obj.fun_one().msg, obj.fun_two().msg );
    //Hello_1 Hello_2
*/

/*
    interface interface1{
        fun_one():any;
    }

    interface interface2 extends interface1{
        fun_two():any;
    }

    interface interface3 extends interface2{
        fun_three():any;
    }

    let obj:interface3 = {
        fun_one : ():any=>{
            return ["ReactJS"];
        },
        fun_two : ():any=>{
            return ["NodeJS"];
        },
        fun_three : ():any=>{
            return ["MongoDB"];
        }
    };
    console.log(
        obj.fun_one()[0],
        obj.fun_two()[0],
        obj.fun_three()[0]
    );
    //ReactJS NodeJS MongoDB
*/


/*
    interface interface1{
        var_one:string;
    }

    interface interface2{
        var_two:string;
    }

    interface interface3 extends interface1,interface2{
        var_three:string;
    }

    let obj:interface3 = {
        var_one : "Hello_1",
        var_two : "Hello_2",
        var_three : "Hello_3"
    };

    console.log( obj.var_one, obj.var_two, obj.var_three );
    //Hello_1 Hello_2 Hello_3
*/


/*
    interface interface1{
        var_one:string;
    }

    interface interface2 extends interface1{
        var_two:string;
    }

    interface interface3 extends interface1{
        var_two:string;
    }

    interface interface4 extends interface1{
        var_two:string;
    }

    let obj1:interface2 = {
        var_one : "Hello_1",
        var_two : "Hello_2"
    };

    let obj2:interface3 = {
        var_one : "Welcome_1",
        var_two : "Welcome_2"
    };

    let obj3:interface4 = {
        var_one : "Sub_One",
        var_two : "Sub_Two"
    };
    console.log( obj1.var_one, obj1.var_two );              //Hello_1 Hello_2
    console.log( obj2.var_one, obj2.var_two );              //Welcome_1 Welcome_2
    console.log( obj3.var_one, obj3.var_two );              //Sub_One Sub_Two
*/

interface interface1{
    var_one:string;
}

interface interface2 extends interface1{
    var_two:string;
}

interface interface3 extends interface1{
    var_three:string;
}

interface interface4 extends interface2,interface3{
    var_four:string;
}

let obj:interface4 = {
    var_one : "Hello_1",
    var_two : "Hello_2",
    var_three : "Hello_3",
    var_four : "Hello_4"
};

console.log( obj.var_one, obj.var_two, obj.var_three, obj.var_four );
//Hello_1 Hello_2 Hello_3 Hello_4













































































































































































