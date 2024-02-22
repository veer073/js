function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("R");
}

//sayMyName-> reference
sayMyName() //-->Execution



function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

// addTwoNumbers(54,654)
// addTwoNumbers(54,"654")
// addTwoNumbers(54,"a")
// addTwoNumbers(54,null)

function addTwoNumber(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}


const res=addTwoNumber(54,654)
console.log("Result:",res);

function LoginUserMessage(username){
    if(username===undefined){   // can also be written as if(!username)
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}


console.log(LoginUserMessage("Veer"));
console.log(LoginUserMessage(""));
console.log(LoginUserMessage());   //---> will print "undefined just logged in"

// Shopping Cart Idea
function CalculateCartPrice(...num1){ //rest operator
    return num1
}

console.log((CalculateCartPrice(200,400,600,343)));


const user={
    username:"Veer",
    price:69
}
//method to pass object into function

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username:"Thakur",
    price:6969
})

const myNewArr=[200,300,400,500]

function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(myNewArr));