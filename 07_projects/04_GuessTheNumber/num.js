const randomNum=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworHi=document.querySelector('.loworHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')
let prevGuess=[]
let numGuess=1

let PlayGame=true;
if(PlayGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('PLease Enter a Valid Number')
    }else if(guess<1){
        alert('PLease Enter a  Number more than 1')
    }else if(guess>100){
        alert('PLease Enter a  Number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMessage(message){

}


function newGame(){

}

function endGame(){

}