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
    if(guess===randomNum){
        displayMessage(`You guessed it right`)
        endGame();

    }else if(guess<randomNum){
        displayMessage(`Num is too low`)
    }else if(guess>randomNum){
        displayMessage(`Number is too high`)

    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    loworHi.innerHTML=`<h2>${message}</h2>`
}


function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    PlayGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNum = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      PlayGame = true;
    });
  }