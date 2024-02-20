const name="Veer"
const repoCount=4

// console.log(name+repoCount+"value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName=new String('Veer-Singh')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('S'));

const newString=gameName.substring(0,5)  //last value not included
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);


const newStringOne="    Veer    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://Veer.com/veer%20PratapSingh"
console.log(url.replace('%20','-'));
console.log(url.includes('Veer'))

console.log(gameName.split('-'));