const myArr=[34,3,5,4,2,4,3,true,"Veer"]
const myHeroes=["I","Am","Batman"]
// console.log(myArr[0]);


const myArr2=new Array(1,2,3,4,5)


// // Array MEthods

myArr.push(6)
myArr.push(77)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9)   // Insert in Start
// console.log(myArr);

myArr.shift()
// console.log(myArr);



// console.log(myArr.includes("Veer"));

const newArr=myArr.join()

// console.log(newArr);
// console.log(typeof newArr);


// // slice, splice

console.log("A",myArr);

const myn1=myArr.slice(1,3) //donot manipulate original array
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)  //manipulate original array
console.log(myn2);