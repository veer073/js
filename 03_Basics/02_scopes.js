let a=300
if(true){
    let a=10
    const b=20
    var c=30
}


// console.log(a);---> let is not out of scope
// console.log(b);---> const is also not out of scope
// console.log(c);--->var is printed out of scope


//nested scope

function one(){
    const username="veer"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); --->cant be executed due to scope

    two()
}

one()



if(true){
    const username="Veer"
    if(username==="Veer"){
        const website=" Youtube"
        console.log(username+website);

    }
    // console.log(website);
}

// console.log(username);




//*******************interesting******************
addone(8)   // can happen
function addone(num){
    return num+1
}
addone(5)
// console.log(addone(5));

// addTwo(5)   --->cant be done like that due to storing in constant
const addTwo=function(num){    //is a function but can also be called as expression
    return num+2
}

addTwo(5)
