console.log("Hello, World!");
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    console.log(choices[Math.floor(Math.random()* 3)])
    return choices[Math.floor(Math.random()* 2)];
}

function getPlayerChoice(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log("Draw")
    }
}

getComputerChoice();