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

//console.log(getComputerChoice());
//console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {

    if(playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        console.log("Computer wins! Paper beats Rock");
        //return "Computer wins! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        console.log("Player wins! Rock beats Scissors");
       // return "Player wins! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        console.log("Player wins! Paper beats Rock");
        //return "Player wins! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        console.log("Computer wins! Scissors beats Paper");
       // return "Computer wins! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        console.log("Computer wins! Rock beats Scissors");
       // return "Computer wins! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
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
