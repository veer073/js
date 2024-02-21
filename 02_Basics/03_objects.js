//singelton   object.create

//object literals

const mySym=Symbol("key1")


const JsUser={
    name: "Veer",
    "full name":"Veer Pratap Singh",
    [mySym]: "myKey1",
    age:19,
    location: "ghaziabad",
    email: "veer@amazon.com",
    isLoggedIn: false,
    LastLoginDays:["Mon","Sat"]


}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email="veer@bard.com"
console.log(JsUser);
// Object.freeze(JsUser)   //data freezed no change can be made
JsUser.email="veer@gemini.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
