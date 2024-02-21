function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let choice = prompt('Pick rock, paper, or scissors: ').toLowerCase();
    const acceptableChoices = ['rock', 'paper', 'scissors'];

    if (acceptableChoices.includes(choice)) {
        return choice.charAt(0).toUpperCase() + choice.substr(1).toLowerCase();
    } else {
        alert('Not a valid choice. Pick again.')
        getPlayerChoice();
    }
}

function playRound(getPlayerChoice, getComputerChoice) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

}

function checkPlayerWin(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 0
    } else if ((playerChoice === 'Rock' && computerChoice === 'Paper') || 
                (playerChoice === 'Scissors' && computerChoice === 'Rock') || 
                (playerChoice === 'Paper' && computerChoice === 'Scissors')) {
        return 0;
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || 
                (playerChoice === 'Scissors' && computerChoice === 'Paper') || 
                (playerChoice === 'Paper' && computerChoice === 'Rock')) {
        return 1;
    } else {
        return 0;
    }
}