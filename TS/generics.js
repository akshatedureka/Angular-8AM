/*
    function fun_one<A,B>(param1:A,param2:B):void{
        console.log( param1, param2 );
    }
    fun_one<string,string>("Hello_1","Hello_2");
    fun_one<number,number>(100,200);
    fun_one<boolean,boolean>(true,false);
    fun_one<any,any>({"key1":"Hello_1"},{"key1":"Hello_2"})
*/
var class_one = /** @class */ (function () {
    function class_one(param1, param2, param3) {
        this.sub_one = param1;
        this.sub_two = param2;
        this.sub_three = param3;
    }
    return class_one;
}());
var obj1 = new class_one("Hello_1", "Hello_2", "Hello_3");
var obj2 = new class_one(100, 200, 300);
console.log(obj1.sub_one, obj1.sub_two, obj1.sub_three);
console.log(obj2.sub_one, obj2.sub_two, obj2.sub_three);
