const userEmail="veer@ai.cs"
if(userEmail){
    console.log("Got the user email");
}
else{
    console.log("No email");
}

// truthy means when we assume something to be true as we assumed that userEmail string is true in the upper case


//Falsy values-->false,0,negative values,"",null,undefined,NaN,BigInt

//Rest all values are truthy values ex--> "0",'false'," ",[],{},function(){}



//Nullish coalescing operator(??): numm undefined

let val1,val2;
val1=5??10
console.log(val1);
val2=null??10
console.log(val2);