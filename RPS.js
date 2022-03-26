	// function choice button selector
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultOutputDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

	//display of result for clicking buttons
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
}))

function generateComputerChoice() {
	const randomNumber = Math.random() * possibleChoices.length
}