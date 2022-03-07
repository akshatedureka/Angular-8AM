console.log("welcome to typescript");
// ==       (value)
// ===      (value & datatype)

console.log( 1 == "1" );                    //true
console.log( 1 === "1" );                   //false
console.log( 1 == "one" );                  //false
console.log( 1 === "one" );                 //false
//true --- 1
//false --- 0
console.log( true + true );                 //2
console.log( true + false );                //1
console.log( true / false );                //Infinity
console.log( false/true );                  //0



// & (both should be true)
console.log( 1 & 1 );                   //1
console.log( 1 & 0 );                   //0
console.log( 0 & 1 );                   //0
console.log( 0 & 0 );                   //0



// |  (at least one value should be true)
console.log( 1 | 1 );                   //1
console.log( 1 | 0 );                   //1
console.log( 0 | 1 );                   //1
console.log( 0 | 0 );                   //0
console.log( (1&1) & (1|0) );           //1


//^ (XOR)   (both should opposite)
console.log( 1 ^ 1 );               //0
console.log( 0 ^ 0 );               //0
console.log( 1 ^ 0 );               //1
console.log( 0 ^ 1 );               //1                  












































