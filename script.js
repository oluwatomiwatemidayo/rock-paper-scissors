// JavaScript file

function getComputerChoice() {
    let word = ['Rock', 'Paper', 'Scissors'];
    let words = word[Math.floor(Math.random()*word.length)];
    return words;
}

console.log(getComputerChoice());