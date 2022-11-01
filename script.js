// JavaScript file
const OPTIONS = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let words = OPTIONS[Math.floor(Math.random()*OPTIONS.length)];
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
        console.log("Computer wins! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Scissors") {
        playerScore++;
        console.log("Player wins! Rock beats Scissors");
       // return "Player wins! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection === "Rock") {
        playerScore++;
        console.log("Player wins! Paper beats Rock");
        //return "Player wins! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection === "Scissors") {
        computerScore++;
        console.log("Computer wins! Scissors beats Paper");
       // return "Computer wins! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === "Rock") {
        computerScore++;
        console.log("Computer wins! Rock beats Scissors");
       // return "Computer wins! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection === "Paper") {
        playerScore++;
        console.log("Player wins! Scissors beats Paper");
        //return "Player wins! Scissors beats Paper";
    } else {
        console.log("it's a tie!");
       // return "it's a tie!"
    }
}

//console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors: ", "Rock");
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

    }

    if (playerScore > computerScore) {
        console.log(`Congratulations! player wins ${playerScore} : ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Oops! computer wins ${computerScore} : ${playerScore}`);
    } else {
        console.log(`Draw! ${playerScore} : ${computerScore}`);
    }
}

game();
