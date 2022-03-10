/*
    class class_one{
        var_one:string = "Hello_1";
        var_two:string = "Hello_2";
        var_three:string = "Hello_3";
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );
    //Hello_1 Hello_2 Hello_3
*/



/*
    class class_one{
        v1:string;
        v2:string;
        v3:string;
        constructor(){
            this.v1 = "Hello_1";
            this.v2 = "Hello_2";
            this.v3 = "Hello_3";
        }
    };
    let obj:class_one = new class_one();
    console.log( obj.v1, obj.v2, obj.v3 );          
    //Hello_1 Hello_2 Hello_3
*/

/*
    class class_one{
        sub_one:any;
        sub_two:any;
        sub_three:any;
        constructor(arg1:any,arg2:any,arg3:any){
            this.sub_one = arg1;
            this.sub_two = arg2;
            this.sub_three = arg3;
        }
    }
    let obj:class_one = new class_one("Hello_1","Hello_2","Hello_3");
    console.log( obj.sub_one, obj.sub_two, obj.sub_three );                     //Hello_1 Hello_2 Hello_3


    let obj1:class_one = new class_one("Welcome_1","Welcome_2","Welcome_3");
    console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );                  //Welcome_1 Welcome_2 Welcome_3
*/





/*
    class class_one{
        fun_one():string{
            return "Hello_1";
        }

        fun_two():string{
            return "Hello_2";
        }

        fun_three():string{
            return "Hello_3";
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
    //Hello_1 Hello_2 Hello_3
*/


/*
    class class_one{
        private v1:string;
        private v2:string;
        private v3:string;

        constructor(){
            this.v1 = "Hello_1";
            this.v2 = "Hello_2";
            this.v3 = "Hello_3";
        }

        public fun_one():string{
            return this.v1;
        }

        public fun_two():string{
            return this.v2;
        }

        public fun_three():string{
            return this.v3;
        }
    }

    let obj:class_one = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
    //Hello_1 Hello_2 Hello_3
*/


//inheritance
//getting the data from parent class to child class called as inheritance
//we will implement the inheritance with the help of extends keyword
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hirarichal inheritance
//5) hybrid inheritance

//single level inheritance
class Parent{
    p1:string = "Hello_1";
}
class Child extends Parent{
    c1:string = "Hello_2";   
}

let obj1:Parent = new Parent();
console.log( obj1.p1 );

let obj2:Child = new Child();
console.log( obj2.p1, obj2.c1 );


let obj3:Parent = new Child();
console.log( obj3.p1 );


//let obj4:Child = new Parent();
//Property 'c1' is missing in type 'Parent' but required in type 'Child'.

