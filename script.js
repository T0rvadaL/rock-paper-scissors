const DOMwinner = document.querySelector(".winner");
const DOMplayerScore = document.querySelector(".player-score span");
const DOMcomputerScore = document.querySelector(".computer-score span");
const DOMscoreToWin = document.querySelector(".first-to-n span");
const DOMcurrentRound = document.querySelector(".current-round span")

const DOMbuttons = document.querySelectorAll(".buttons");
for (let button of DOMbuttons) {
    button.addEventListener("click", playRPS)
}

let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
const scoreToWin = 5;
let gameStarted = false;

function playRPS(e) {
    if (!gameStarted) startNewGame();

    const playerChoice = e.target.className;
    roundWinner = playRound(playerChoice, computerChoice());

    if (playerScore === scoreToWin || computerScore === scoreToWin) {
        let winner = ""
        switch (true) {
            case playerScore === scoreToWin: {
                winner = "Player";
                break;
            }
            default: winner = "Computer";
        }
        DOMwinner.textContent = `${winner} wins!`;
        gameStarted = false;
    }
}

function startNewGame() {
    DOMwinner.textContent = "";
    DOMplayerScore.textContent = 0;
    DOMcomputerScore.textContent = 0;
    DOMscoreToWin.textContent = scoreToWin;
    DOMcurrentRound.textContent = "1";
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
    gameStarted = true;
}

function playRound(playerChoice, computerChoice) {
    let winner = "";
    let winnerChoice = "";
    let loserChoice = "";

    switch (true) {
        case (playerChoice === computerChoice): {
            DOMwinner.textContent = "It's a tie!"; 
            currentRound++;
            DOMcurrentRound.textContent = currentRound;
            return;
        }

        case (playerChoice === "rock" && computerChoice === "scissors"):
        case (playerChoice === "paper" && computerChoice === "rock"):
        case (playerChoice === "scissors" && computerChoice === "paper"): {
            winner = "Player";
            winnerChoice = playerChoice;
            loserChoice = computerChoice;
            playerScore++;
            DOMplayerScore.textContent = playerScore;
            break;
        }

        default: {
            computerScore++;
            winner = "Computer";
            winnerChoice = computerChoice;
            loserChoice = playerChoice;
            DOMcomputerScore.textContent = computerScore;
        }
    }

    DOMwinner.textContent = `${winner} wins with ${winnerChoice} against ${loserChoice}!`;
    currentRound++
    DOMcurrentRound.textContent = currentRound;
    return winner;
}

function computerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}