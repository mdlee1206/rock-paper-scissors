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

    if (playerChoice === computerChoice) {
        return `It's a tie! Both selected ${playerChoice}.`;
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else {
        return `You selected ${playerChoice}, and the computer selected ${computerChoice}.`
    }
}