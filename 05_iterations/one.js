// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <10; i++) {
    const element =i;
    if(element==5){
        console.log("Halfway");
    }
    console.log(element);
    
}


for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    
    }
    
}

let myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// Break and Continue

for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("detected 5 break operation");
        break;
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("detected 5 continue operation");
        continue;
    }
   console.log(`Value of i is ${index}`);
    
}