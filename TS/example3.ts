import { obj } from "./example2";
const { var_one, 
        var_two, 
        var_three, 
        fun_one, 
        fun_two, 
        fun_three} = obj;
console.log( obj.var_one, obj.var_two, obj.var_three, obj.fun_one(), obj.fun_two(), obj.fun_three() );
console.log( obj["var_one"], obj["var_two"], obj["var_three"]);
console.log( var_one, var_two, var_three,fun_one(),fun_two(),fun_three() );
