//Modifiers
//TypeScript supports the following modifiers
//1) public
//2) private
//3) protected

//public
//public modifier applicable to "variables", "functions" and "constructor"
//public members we can access with class "objects"
//public members by default accessable to child classes

/*
    class class_one{
        public var_one:string = "Hello_1";
        public constructor(){

        }
        public fun_one():string{
            return "Hello_2";
        }
    };
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.fun_one() );
    //Hello_1 Hello_2
*/


/*
    class class_one{
        public var_one:string = "Hello_1";
        public fun_one():string{
            return "Hello_2";
        }
    };
    class class_two extends class_one{

    }
    let obj:class_two = new class_two();
    console.log( obj.var_one, obj.fun_one() );
    //Hello_1 Hello_2
*/


//private
//private modifier applicable to "variables","functions" and "constructor"
//we can't access private members with class "objects"
//private members won't accessable to "child" classes
//we can't create object to the private constructor

/*
    class class_one{
        private constructor(){}
    };
    new class_one();
    //Constructor of class 'class_one' is private and only accessible within the class declaration
*/
/*
    class class_one{
        private var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        }
        private fun_one():string{
            return "Hello_2";
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one );
    console.log( obj.fun_one() );
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/

/*
    class class_one{
        private var_one:string = "Hello";
    }
    class class_two extends class_one{

    };
    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/


//protected
//variables, functions and constructor
//we can't access protected members by using class "objects"
//by default protected members accessable to "child" classes

/*
    class class_one{
        protected var_one:string = "Hello";
        protected fun_one():string{
            return "Hello_2";
        }
    };
    let obj:class_one = new class_one();
    obj.var_one;
    obj.fun_one();
    //Property 'fun_one' is protected and only accessible within class 'class_one' and its subclasses.
*/

/*
    class class_one{
        protected var_one:string = "Hello";
    }
    class class_two extends class_one{
        public var_two = this.var_one;
    }
    let obj:class_two = new class_two();
    console.log( obj.var_two );
    //Hello
*/

/*
    class class_one{
        protected constructor(){}
    }
    new class_one();
    //Constructor of class 'class_one' is protected and only accessible within the class declaration.
*/


/*
    class class_one{
        constructor(public arg1:any,public arg2:any,public arg3:any){}
    };
    let obj:class_one = new class_one("Hello_1","Hello_2","Hello_3");
    console.log(
        obj.arg1,
        obj.arg2,
        obj.arg3
    );
    //Hello_1 Hello_2 Hello_3
*/


class class_one{
    constructor(private arg1:any,private arg2:any,private arg3:any){}
};
let obj:class_one = new class_one("Hello_1","Hello_2","Hello_3");
//obj.arg1;
//Property 'arg1' is private and only accessible within class 'class_one'.























































































































































































