function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerPick, computerPick) {
    playerPick = playerPick.toLowerCase();

    switch (playerPick === "rock" || playerPick === "paper" || playerPick === "scissors") {
        case (playerPick === computerPick):
            return "It's a tie!";

        case (playerPick === "rock" && computerPick === "scissors"):
        case (playerPick === "paper" && computerPick === "rock"):
        case (playerPick === "scissors" && computerPick === "paper"):
            return "Player wins!";

        default: return "Computer wins!";
    }

    return "Invalid selection";
}

function game(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++ ) {
        let roundWinner = playRound(prompt("Rock, paper or scissors?"), computerPlay());

        switch (roundWinner) {
            case "Player wins!": playerScore++;
            case "Computer wins!": computerScore++;
        }
        console.log(roundWinner);
    }
    let winner;
    switch (true) {
        case playerScore > computerScore: winner = "Player";
        case playerScore < computerScore: winner = "Computer";
        default: return "It's a tie!";
    }
    return `${winner} wins!`;
}