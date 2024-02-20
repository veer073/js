/* 1. primitive --> 7 types
    ->string
    ->number
    ->boolean
    ->null
    ->undefined
    ->symbol
    ->BigInt



2. Non Primitive --> Reference

-> Array
->Objects
->Functions
*/

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);

const BigNum= 2345678434567n




const heros=["shaktiman","naagraj","doga"]

let myObj= {
    name:"Veer",
    age: 22,
}


const myFunction= function(){
    console.log("Hello Veer");
}

console.log(typeof BigNum);
console.log(typeof myFunction);








// +++++++++++++MEMORY+++++++++++++++

//stack(primitive),heap(non-primitive)

let myLinkedIn="VeerPratapSingh"
let anothername=myLinkedIn  //copy in this
anothername="SagarPratapSingh"

console.log(myLinkedIn);
console.log(anothername);


let userOne={
    email:"veerpratap1876@gmail.com",
    Upi: "user@okaxis",
}

let userTwo=userOne  //reference in this

userTwo.email="veer.21b0121018@abes.ac.in"

console.log(userOne.email);
console.log(userTwo.email);