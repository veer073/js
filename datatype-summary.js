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