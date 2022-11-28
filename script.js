let playerScore = 0;
let computerScore = 0;
let result = document.querySelector('#result');
const OPTIONS = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoice = OPTIONS[Math.floor(Math.random()*OPTIONS.length)];
    return computerChoice;
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

function playRound(playerSelection, computerSelection) {

    if(playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        result.textContent = `Computer wins! Paper beats Rock  ${playerScore} : ${computerScore}`; 
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        result.textContent = `Player wins! Rock beats Scissors  ${playerScore} : ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        result.textContent = `Player wins! Paper beats Rock  ${playerScore} : ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        let result = document.querySelector('#result');
        result.textContent = `Computer wins! Scissors beats Paper  ${playerScore} : ${computerScore}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        result.textContent = `Computer wins! Rock beats Scissors  ${playerScore} : ${computerScore}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        result.textContent = `Player wins! Scissors beats Paper  ${playerScore} : ${computerScore}`;
    } else {
        result.textContent = `it's a tie!  ${playerScore} : ${computerScore}`;
    }

    if (playerScore === 5 && computerScore < 5) {
        result.textContent = `Congratulations! player wins ${playerScore} : ${computerScore}`;
    } else if (playerScore < 5 && computerScore === 5) {
        result.textContent = `Oops! computer wins ${playerScore} : ${computerScore}`;
    }
}
