const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultOutputDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
}))
