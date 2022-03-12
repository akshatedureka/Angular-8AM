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
var obj = {
    var_one: "Hello_1",
    var_two: "Hello_2",
    var_three: "Hello_3",
    var_four: "Hello_4"
};
console.log(obj.var_one, obj.var_two, obj.var_three, obj.var_four);
