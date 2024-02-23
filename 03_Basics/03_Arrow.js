const user={
    username: "Veer",
    price:999,


    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// this-->used to refer the current cotext or same scope variable

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()


console.log(this);  // {} object printed



function chai(){
    let username="Veer"
    console.log(this.username);  //-->Undefined
}

chai()


//---------Arrow Function--------

const chaii =()=>{
    let username="Veer"
    console.log(this);
}

chaii()

//BASIC ARROW FUNCTION

const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(45,46));


// IMPLICIT RETURN
const addTwoNums=(num1,num2)=>  num1+num2

console.log(addTwoNums(453,46));


const ObjectImplicitReturn=()=>  ({username:"Veer"})

console.log(ObjectImplicitReturn());

// const myArray=[2,5,7,3,7]

// myArray.forEach(()=>{})

