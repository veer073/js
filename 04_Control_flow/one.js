// if
const isUserLoggedIn=true;
const temperature=41
if(temperature<50){
    console.log("Less than 50");
}
else{
    console.log("greater than 50");
}


const score=200
if(score>100){
    const power="fly"
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);-->error

// shorthand notation

const balance=1000
if(balance>500) console.log("test"); //-->implicit code



if(balance<500){
    console.log("less than 500");
}
else if (balance<750) {
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true;

if(userLoggedIn && debitCard){
    console.log("Allows go buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}