function computerPick() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playerPick() {
    let pick = "";

    do {
        pick = prompt("Rock, paper or scissors?").toLowerCase();
    } while (pick !== "rock" && pick !== "paper" && pick !== "scissors");

    return pick;
}

function printPicks(playerPick, computerPick) {
    console.log(playerPick);
    console.log(computerPick);
}

function playRound() {
    player = playerPick();
    computer = computerPick();
    printPicks(player, computer);
    winner = "";

    switch (true) {
        case (player === computer): {
            console.log("It's a tie!")
            return "tie";
        }

        case (player === "rock" && computer === "scissors"):
        case (player === "paper" && computer === "rock"):
        case (player === "scissors" && computer === "paper"): {
            winner = "Player";
            break;
        }

        default: winner = "Computer";
    }
    console.log(`${winner} wins!`);
    return winner;
}

function playRounds(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++ ) {
        let roundWinner = playRound();

        switch (roundWinner) {
            case "Player": playerScore++;
            case "Computer": computerScore++;
        }
    }

    switch (true) {
        case playerScore > computerScore: return `Player wins with ${playerScore} points!`;
        case playerScore < computerScore: return `Computer wins with ${computerScore} points!`;

        default: return "Game ended with a tie..";
    }
}