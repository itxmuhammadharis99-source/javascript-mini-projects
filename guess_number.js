let randomNumber = parseInt(Math.random()*100 +1);
const submit =  document.querySelector('#subt');
const userInput =  document.querySelector('#guessField');
const guessSlot =  document.querySelector('.guesses');
const remaining =  document.querySelector('.lastResult');
const lowOrHi =  document.querySelector('.lowOrHi');
const startOver =  document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess=[]
let numGuess = 1

let playGame = true


if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess (guess){
    if (isNaN(guess)) {
        alert("Please Enter a Valid number")  
    }else if(guess < 1){
        alert("Please Enter a Valid number more then 1")
    }else if(guess > 100){
        alert("Please Enter a Valid number less then 100")
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMassage(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
   if (guess === randomNumber) {
      displayMassage(`You Guess it right`)
      endGame()
   }else if(guess < randomNumber){
      displayMassage(`Number is too low `)
   }
   else if(guess > randomNumber){
      displayMassage(`Number is too high `)
   }
}

function displayGuess (guess){
    userInput.value= ''
    guessSlot.innerHTML += `${guess}  ,`
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMassage (massage){
   lowOrHi.innerHTML =`<h2>${massage}</h2>`
}

function newGame (){
    const newGameButton = document.querySelector('#New-Game')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = []
        numGuess =1;
        guessSlot.innerHTML ='';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame (){
    userInput.value =''
    userInput.setAttribute('disabled', '')
    p.classList.add("button")
    p.innerHTML = '<h2 id="New-Game"> Start new Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}