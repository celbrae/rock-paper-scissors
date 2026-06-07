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
    btn1.onclick = () => "rock";
}

function checkScores(humanScore, computerScore) {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            scoreDiv.textContent = "Human score: " + humanScore + " --- Computer score: " + computerScore + " || HUMAN WINS";
        } else {
            scoreDiv.textContent = "Human score: " + humanScore + " --- Computer score: " + computerScore + " || COMPUTER WINS";
        }
    } 
}

// create a function that holds the logic to play a round
function playRound(humanChoice, computerChoice) {
    checkScores(humanScore, computerScore);
    if (humanScore !== 5 & computerScore !== 5) {
        if (humanChoice === "rock") {
            humanSelectionDiv.textContent = "Human selects rock";
            if (computerChoice === "rock") {
                computerSelectionDiv.textContent = "Computer selects rock";
                resultDiv.textContent = "Draw";
            } else if (computerChoice === "paper") {
                computerSelectionDiv.textContent = "Computer selects paper";
                resultDiv.textContent = "Loss";
                computerScore += 1;
            } else {
                computerSelectionDiv.textContent = "Computer selects scissors";
                resultDiv.textContent = "Win";
                humanScore += 1;
            }
        } else if (humanChoice === "paper") {
            humanSelectionDiv.textContent = "Human selects paper";
            if (computerChoice === "rock") {
                computerSelectionDiv.textContent = "Computer selects rock";
                resultDiv.textContent = "Win";
                humanScore += 1;
            } else if (computerChoice === "paper") {
                computerSelectionDiv.textContent = "Computer selects paper";
                resultDiv.textContent = "Draw";
            } else {
                computerSelectionDiv.textContent = "Computer selects scissors";
                resultDiv.textContent = "Loss";
                computerScore += 1;
            }
        } else if (humanChoice === "scissors") {
            humanSelectionDiv.textContent = "Human selects scissors";
            if (computerChoice === "rock") {
                computerSelectionDiv.textContent = "Computer selects rock";
                resultDiv.textContent = "Loss";
                computerScore += 1;
            } else if (computerChoice === "paper") {
                computerSelectionDiv.textContent = "Computer selects paper";
                resultDiv.textContent = "Win";
                humanScore += 1;
            } else {
                computerSelectionDiv.textContent = "Computer selects scissors";
                resultDiv.textContent = "Draw";
            }
        }
    }
}

// define the buttons
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const humanSelectionDiv = document.getElementById("humanSelection");
const computerSelectionDiv = document.getElementById("computerSelection");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// write variables that holds the player's score and the computer's score
let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

//make rock button make game play with user choice as rock
btn1.onclick = () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

btn2.onclick = () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

btn3.onclick = () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}




