/*
    function fun_one<A,B>(param1:A,param2:B):void{
        console.log( param1, param2 );
    }
    fun_one<string,string>("Hello_1","Hello_2");
    fun_one<number,number>(100,200);
    fun_one<boolean,boolean>(true,false);
    fun_one<any,any>({"key1":"Hello_1"},{"key1":"Hello_2"})
*/


class class_one<X,Y,Z>{
    sub_one:X;
    sub_two:Y;
    sub_three:Z;
    constructor(param1:X,param2:Y,param3:Z){
        this.sub_one = param1;
        this.sub_two = param2;
        this.sub_three = param3;
    }
}
let obj1:class_one<string,string,string> = new class_one("Hello_1","Hello_2","Hello_3");
let obj2:class_one<number,number,number> = new class_one(100,200,300);
console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );
console.log( obj2.sub_one, obj2.sub_two, obj2.sub_three );










