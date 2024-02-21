const score=400
const balance=new Number(100)
console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));


const otherNumber=114.53533

console.log(otherNumber.toPrecision(3)); //return string


const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));





//**********************maths******************** 

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.9));
console.log(Math.min(4,6,7,3));
console.log(Math.max(5,67,8,43,2));


console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor((Math.random() *(max-min+1)) +min));