//Typescript supports following modifiers
//1) public
//2) private
//3) protected

//public
//public modifier "applicable" to "variables", "functions" and "constructors"
//public members we can access by using class "objects"
//public members by default accessable to "child" classes
//recomended modifier to "functions" is "public"

/*
    class class_one{
        public var_one:string;
        public constructor(){
            this.var_one = "Hello_1";
        }
        public fun_one():string{
            return this.var_one;
        }
    };
    let obj:class_one = new class_one();
    console.log(
        obj.var_one,
        obj.fun_one()
    );
    //Hello_1 Hello_1
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
//private modifier applicable to "variables", "functions" and "constructors"
//private members won't accessable with class "objects"
//private members won't accessable to child classes
//we can't create "object" to the "private constructor" class
//recomended modifier for variables is private

/*
    class class_one{
        private var_one:string;
        private constructor(){
            this.var_one = "Hello_1";
        }
        private fun_one():string{
            return "Hello_2";
        }
    }
    let obj:class_one = new class_one();
    //Constructor of class 'class_one' is private and only accessible within the class declaration
*/

/*
    class class_one{
        private var_one:string = "Hello_1";
        private fun_one():string{
            return "Hello_2";
        }
    }
    let obj:class_one = new class_one();
    obj.var_one;                    //Property 'var_one' is private and only accessible within class 'class_one'.
    obj.fun_one();                  //Property 'fun_one' is private and only accessible within class 'class_one'.
*/


/*
    class class_one{
        private var_one:string = "hello_1";
    };
    class class_two extends class_one{}
    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/



//protected
//protected applicable to variables, functions and constructors
//protected members can't accessable by using class "objects"
//protected members by default available to "child" classes
//we can't create object to protected constructor

/*
    class class_one{
        protected constructor(){}
    }
    let obj:class_one = new class_one();
    //Constructor of class 'class_one' is protected and only accessible within the class declaration.
*/

class class_one{
    protected var_one:string = "Hello_1";
}

let obj:class_one = new class_one();
obj.var_one;
//Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.




































































































