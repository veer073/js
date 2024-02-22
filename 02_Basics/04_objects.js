// const tinderUser= new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

// regular user

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Veer",
            lastname:"Thakur"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);


// value from database

const user=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    }
]

// console.log(user[1].email);


//all methods works commented out just to make terminal clean



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//De-structurization of objects

const course={
    coursename:"JS by Veer Sir",
    price:"99",
    courseInstructor:"Veer Sir"
}

const {courseInstructor:instructor}=course
console.log(instructor);

//few methods

// This method is used in React js

// const navbar=({company})=>{

// }
// navbar(company="Veer")



//JSON
// {
//     "name":"Veer Sir"
//     "coursename":"JS by Veer Sir",
//     "price":"99",
// }



[
    {},
    {},
    {}
]