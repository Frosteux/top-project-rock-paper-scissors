function computerSelection() {
    let compSelect = Math.floor(Math.random() * 3) + 1;
    if(compSelect == 1){
        compSelect = "rock";
    } else if (compSelect == 2){
        compSelect = "paper";
    } else {
        compSelect = "scissors";
    };
    return compSelect;
};

function playerSelection() {
    return prompt("Rock, Paper, or Scissors?");
};

function compareSelections(player,comp) {
    player=player.toLowerCase();
    comp=comp.toLowerCase();
    console.log(player);
    console.log(comp);
    return (player==comp) ? "Tie"
    : (player=="rock" && comp=="scissors") ? "Player Wins"
    : (player=="rock" && comp=="paper") ? "Computer Wins"
    : (player=="paper" && comp=="rock") ? "Player Wins"
    : (player=="paper" && comp=="scissors") ? "Computer Wins"
    : (player=="scissors" && comp=="paper") ? "Player Wins"
    : (player=="scissors" && comp=="rock") ? "Computer Wins"
    : (player!=="rock"||player!=="paper"||paper!=="scissors") ? "Not a valid entry."
    : "Unknown";
};

function game() {
    let playerWinCount = 0
    let computerWinCount = 0
    for (let i =0; i < 5; i++){
        let game = compareSelections(playerSelection(),computerSelection());
        game == "Player Wins" ? playerWinCount++ 
        : game == "Computer Wins" ? computerWinCount++
        : game == "Tie" || game == "Not a valid entry." ? "Nobody Wins"
        : game == "Unknown";
    };
    return playerWinCount > computerWinCount ? "Player Wins!" 
    : computerWinCount > playerWinCount ? "Computer wins!"
    : computerWinCount===playerWinCount ? "Tie!"
    : "Unknown issue with game.";
}

console.log(game());
//console.log(compareSelections(playerSelection(),computerSelection()));