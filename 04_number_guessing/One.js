const randomNum = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#sbmt');
const userInput = document.querySelector('#guessField');
const suessShot = document.querySelector('.guesses');
const remaining = document.getElementsByClassName('.lastResult');
const lowHigh = document.querySelector('.lowHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

//-------Methods---------------
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter the valid number');
    } else if(guess < 1){
        alert('Please enter number more than 1');
    } else if(guess > 100){
        alert('Please enter the number less than 100');
    } else{
        prevGuess.push(guess)
        if(guess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed right`);
    }
    else if(guess < randomNum){
        displayMessage(`Number is Toooo low`);
    }
    else if(guess > randomNum){
        displayMessage(`Number is Toooo high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    lowHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
    randomNum = parseInt(Math.random()*100 +1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
   })
}
