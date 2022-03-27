	// function choice button selector
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultOutputDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

	//display of result for clicking buttons
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
}))

	// function to Generate computer choice
function generateComputerChoice() {
	const randomNumber = Math.floor( Math.random() * 3) + 1 
	if (randomNumber === 1) {
		computerChoice = 'rock'
	}
	
	
	if (randomNumber === 2) {
		computerChoice = 'scissors'
	}
	
	if (randomNumber === 3) {
		computerChoice = 'paper'
	}
	
	computerChoiceDisplay.innerHTML = computerChoice
}
	// function to show game Result
function getResult() {
	if (computerChoice === userChoice) {
		result = 'you Draw'
	}
}
















































