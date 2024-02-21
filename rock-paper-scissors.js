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
    const playerWin = checkPlayerWin(playerChoice, computerChoice);

    if (playerWin) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

}

function checkPlayerWin(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return false;
    } else if ((playerChoice === 'Rock' && computerChoice === 'Paper') || 
                (playerChoice === 'Scissors' && computerChoice === 'Rock') || 
                (playerChoice === 'Paper' && computerChoice === 'Scissors')) {
        return false;
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || 
                (playerChoice === 'Scissors' && computerChoice === 'Paper') || 
                (playerChoice === 'Paper' && computerChoice === 'Rock')) {
        return true;
    } else {
        return false;
    }
}