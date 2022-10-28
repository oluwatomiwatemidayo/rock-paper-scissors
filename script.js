// JavaScript file
const WORD = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let words = WORD[Math.floor(Math.random()*WORD.length)];
    return words;
}

//console.log(getComputerChoice());

const playerSelection = "paper";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "Rock" && computerSelection === "Paper") {
        return "Computer wins!";
    } else if (playerSelection.toLowerCase() === "Rock" && computerSelection === "Scissors") {
        return "Player wins!";
    } else if (playerSelection.toLowerCase() === "Paper" && computerSelection === "Rock") {
        return "Player wins!";
    } else if (playerSelection.toLowerCase() === "Paper" && computerSelection === "Scissors") {
        return "Computer wins!";
    } else if (playerSelection.toLowerCase() === "Scissors" && computerSelection === "Rock") {
        return "Computer wins!";
    } else if (playerSelection.toLowerCase() === "Scissors" && computerSelection === "Paper") {
        return "Player wins!";
    } else {
        return "it's a tie!"
    }
}
console.log(playRound(playerSelection, computerSelection));