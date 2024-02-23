// Immediately Invoked Function Expression(IIFE)  
// Used to remove the polution caused due to Global scope

function chai(){
    console.log(`DB CONNECTED`);
}

chai()

//IIFE
(function chais(){  //Named IIFI
    console.log(`DB CONNECTED`);
})();
// Two end the IIFI use semicolon
// ()() first ()-> Definition.... ()->Execution Call

( ()=>{
    console.log(`DB CONNECTED TWO`);
})()

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Veer')