// JavaScript file
const WORD = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let words = WORD[Math.floor(Math.random()*WORD.length)];
    return words;
}

//console.log(getComputerChoice());

//const playerSelection = prompt("Rock, Paper or Scissors: ", "Rock");
//const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    if(playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Paper") {
        computerScore++;
        return "Computer wins! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Scissors") {
        playerScore++;
        return "Player wins! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection === "Rock") {
        playerScore++;
        return "Player wins! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Scissors") {
        computerScore++;
        return "Computer wins! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === "Rock") {
        computerScore++;
        return "Computer wins! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === "Paper") {
        playerScore++;
        return "Player wins! Scissors beats Paper";
    } else {
        return "it's a tie!"
    }
}

//console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors: ", "Rock");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

    }
    if (playerScore > computerScore) {
        console.log("Congratulations! player wins");
    } else if (playerScore < computerScore) {
        console.log("Oops! computer wins");
    } else {
        console.log("tie");
    }
}

game();
