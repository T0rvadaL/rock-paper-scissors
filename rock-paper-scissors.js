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
