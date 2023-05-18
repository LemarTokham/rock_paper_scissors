console.log("Hello, World!");
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()* 3)];
}

function getPlayerChoice(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "Draw"
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You Win, Computer chose Rock";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You Lose, Computer chose Rock";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You Win, Computer chose Paper";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You Lose, Computer chose Paper";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You Lose, Computer chose Scissors";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You Win, Computer chose Scissors";
    } else {
        return "Invalid please try again!" + playerSelection + computerSelection;
    }
}



function game() {
    for (i = 0; i < 5; i ++) {
        let user_choice = prompt("Chouice: ").toLowerCase()
        let computerChoice = getComputerChoice()
        let game_result = getPlayerChoice(user_choice, computerChoice)
        console.log(game_result)
    }
}

game()
