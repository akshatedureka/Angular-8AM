"use strict";
exports.__esModule = true;
var example2_1 = require("./example2");
var var_one = example2_1.obj.var_one, var_two = example2_1.obj.var_two, var_three = example2_1.obj.var_three, fun_one = example2_1.obj.fun_one, fun_two = example2_1.obj.fun_two, fun_three = example2_1.obj.fun_three;
console.log(example2_1.obj.var_one, example2_1.obj.var_two, example2_1.obj.var_three, example2_1.obj.fun_one(), example2_1.obj.fun_two(), example2_1.obj.fun_three());
console.log(example2_1.obj["var_one"], example2_1.obj["var_two"], example2_1.obj["var_three"], example2_1.obj["fun_one()"], example2_1.obj["fun_two()"], example2_1.obj["fun_three()"]);
console.log(var_one, var_two, var_three, fun_one(), fun_two(), fun_three());
