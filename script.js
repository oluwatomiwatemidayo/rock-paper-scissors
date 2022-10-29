// JavaScript file
const WORD = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let words = WORD[Math.floor(Math.random()*WORD.length)];
    return words;
}

//console.log(getComputerChoice());

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    if(playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Paper") {
        return "Computer wins! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Scissors") {
        return "Player wins! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection === "Rock") {
        return "Player wins! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Scissors") {
        return "Computer wins! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === "Rock") {
        return "Computer wins! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === "Paper") {
        return "Player wins! Scissors beats Paper";
    } else {
        return "it's a tie!"
    }
}

//console.log(playRound(playerSelection, computerSelection));

function game() {}