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
        let result = document.querySelector('#result');
        result.textContent = "Computer wins! Paper beats Rock";
        computerScore++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        let result = document.querySelector('#result');
        result.textContent = "Player wins! Rock beats Scissors";
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        let result = document.querySelector('#result');
        result.textContent = "Player wins! Paper beats Rock";
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        let result = document.querySelector('#result');
        result.textContent = "Computer wins! Scissors beats Paper";
        computerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        let result = document.querySelector('#result');
        result.textContent = "Computer wins! Rock beats Scissors";
        computerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        let result = document.querySelector('#result');
        result.textContent = "Player wins! Scissors beats Paper";
        playerScore++;
    } else {
        let result = document.querySelector('#result');
        result.textContent = "it's a tie!";
    }
}

let playerScore = 0;
let computerScore = 0;

/**function game() {
    for (let i = 0; i < 1; i++) {
        //const playerSelection = prompt("Rock, Paper or Scissors: ", "Rock");
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

    }

    if (playerScore > computerScore) {
        console.log(`Congratulations! player wins ${playerScore} : ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Oops! computer wins ${playerScore} : ${computerScore}`);
    } else {
        console.log(`Draw! ${playerScore} : ${computerScore}`);
    }
}

game(); **/
