console.log("Hello, World!");
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()* 3)];
}

function getPlayerChoice(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log("Draw")
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
        console.log("You Win, Computer chose Rock")
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        console.log("You Lose, Computer chose Rock");
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        console.log("You Win, Computer chose Paper");
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        console.log("You Lose, Computer chose Paper");
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        console.log("You Lose, Computer chose Scissors");
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        console.log("You Win, Computer chose Scissors");
    } 
}

let userChoice = prompt("Choice: ")
getPlayerChoice(userChoice, getComputerChoice())