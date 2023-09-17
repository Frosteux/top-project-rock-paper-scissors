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

function compareItems(player,comp) {
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
    : "Not a valid entry.";
};

console.log(compareItems(playerSelection(),computerSelection()));