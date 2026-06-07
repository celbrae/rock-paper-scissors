// make function that returns string value, rock, paper, or scissors
function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.3333) {
        return "rock";
    } else if (randomNum < 0.6666) {
        return "paper";
    } else if (randomNum < 1) {
        return "scissors";
    }
}

// make function that gets human choice and returns as string value
function getHumanChoice() {
    return prompt("Pick rock, paper, or scissors").toLowerCase();
}

// create a function that holds the logic to play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Draw");
        } else if (computerChoice === "paper") {
            console.log("Loss");
            computerScore += 1;
        } else {
            console.log("Win");
            humanScore += 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Win");
            humanScore += 1;
        } else if (computerChoice === "paper") {
            console.log("Draw");
        } else {
            console.log("Loss");
            computerScore += 1;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Loss");
            computerScore += 1;
        } else if (computerChoice === "paper") {
            console.log("Win");
            humanScore += 1;
        } else {
            console.log("Draw");
        }
    }
}
// create a function that calls the previous function 5 times
function playGame() {
    for (i = 0; i<5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("Human wins!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a draw!");
    }
}

// write variables that holds the player's score and the computer's score
let humanScore = 0;
let computerScore = 0;

playGame();


