function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let choice = prompt('Pick rock, paper, or scissors: ').toLowerCase();
    const acceptableChoices = ['rock', 'paper', 'scissors'];

    if (acceptableChoices.includes(choice)) {
        return choice
    } else {
        alert('Not a valid choice. Pick again.')
        getPlayerChoice();
    }
}