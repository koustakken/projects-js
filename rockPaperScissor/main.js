const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const scoreDisplay = document.getElementById('score')

const possibleChoices = document.querySelectorAll('.button')

let userChoice
let computerChoice
let userScore = 0
let computerScore = 0

scoreDisplay.innerText = `${userScore} - ${computerScore}`

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerText = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerText = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!'
      userScore++
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost!'
      computerScore++
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!'
      userScore++
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lose!'
      computerScore++
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
      userScore++
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lose!'
      computerScore++
    }
    resultDisplay.innerHTML = result
    scoreDisplay.innerText = `${userScore} - ${computerScore}`
  }