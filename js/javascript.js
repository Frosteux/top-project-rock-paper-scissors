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

function playerSelection(selection) {
    return selection;
};

function compareSelections(player,comp) {
    player=player.toLowerCase();
    comp=comp.toLowerCase();
    return (player==comp) ? "Tie"
    : (player=="rock" && comp=="scissors") ? "You Win"
    : (player=="rock" && comp=="paper") ? "Computer Wins"
    : (player=="paper" && comp=="rock") ? "You Win"
    : (player=="paper" && comp=="scissors") ? "Computer Wins"
    : (player=="scissors" && comp=="paper") ? "You Win"
    : (player=="scissors" && comp=="rock") ? "Computer Wins"
    : (player!=="rock"||player!=="paper"||paper!=="scissors") ? "Not a valid entry."
    : "Unknown";
};

function game() {
    let playerWinCount = 0
    let computerWinCount = 0
    for (let i =0; i < 5; i++){
        let game = compareSelections(playerSelection(),computerSelection());
        game == "You Win" ? playerWinCount++ 
        : game == "Computer Wins" ? computerWinCount++
        : game == "Tie" || game == "Not a valid entry." ? "Nobody Wins"
        : game == "Unknown";
    };
    return playerWinCount > computerWinCount ? "You Win!" 
    : computerWinCount > playerWinCount ? "Computer Wins!"
    : computerWinCount===playerWinCount ? "Tie!"
    : "Unknown issue with game.";
}

const rock = document.querySelector('.playRock');
const paper = document.querySelector('.playPaper');
const scissors = document.querySelector('.playScissors');

rock.addEventListener('click', function(e){
    const winner = compareSelections(playerSelection(e.target.innerText),computerSelection())
    const container = document.querySelector('.resultsContainer');
    const removeWinner = document.querySelector('.declareWinner');
    const declareWinner = document.createElement('span');
    const newRound = document.querySelector('.playAgain');
    const fiveRoundWinner = document.querySelector('.finalWinner');

    if(newRound!==null){
        fiveRoundWinner.remove();
        newRound.remove();
    }
    if(removeWinner!==null){
        removeWinner.remove();
    }

    declareWinner.classList.add('declareWinner');
    declareWinner.style.color = 'white';
    declareWinner.textContent = winner;
    winner=="You Win" ? displayScore(1,0)
    : winner=="Computer Wins" ? displayScore(0,1)
    : console.log('tie');
    //container.append(declareWinner);
});

paper.addEventListener('click', function(e){
    const winner = compareSelections(playerSelection(e.target.innerText),computerSelection())
    const container = document.querySelector('.resultsContainer');
    const removeWinner = document.querySelector('.declareWinner');
    const declareWinner = document.createElement('span');
    const newRound = document.querySelector('.playAgain');
    const fiveRoundWinner = document.querySelector('.finalWinner');

    if(newRound!==null){
        fiveRoundWinner.remove();
        newRound.remove();
    }
    if(removeWinner!==null){
        removeWinner.remove();
    }

    declareWinner.classList.add('declareWinner');
    declareWinner.style.color = 'white';
    declareWinner.textContent = winner;
    winner=="You Win" ? displayScore(1,0)
    : winner=="Computer Wins" ? displayScore(0,1)
    : console.log('tie');
    //container.append(declareWinner);
});

scissors.addEventListener('click', function(e){
    const winner = compareSelections(playerSelection(e.target.innerText),computerSelection())
    const container = document.querySelector('.resultsContainer');
    const removeWinner = document.querySelector('.declareWinner');
    const declareWinner = document.createElement('span');
    const newRound = document.querySelector('.playAgain');
    const fiveRoundWinner = document.querySelector('.finalWinner');

    if(newRound!==null){
        fiveRoundWinner.remove();
        newRound.remove();
    }
    if(removeWinner!==null){
        removeWinner.remove();
    }

    declareWinner.classList.add('declareWinner');
    declareWinner.style.color = 'white';
    declareWinner.textContent = winner;
    winner=="You Win" ? displayScore(1,0)
    : winner=="Computer Wins" ? displayScore(0,1)
    : console.log('tie');
    //container.append(declareWinner);
});

function displayScore(player,computer){
    const container = document.querySelector('.resultsContainer');
    const playerScoreboard = document.createElement('span');
    const computerScoreboard = document.createElement('span');
    const playerScoreClass = document.querySelector('.playerScore');
    const computerScoreClass = document.querySelector('.computerScore');
    let playerScore = 0
    let computerScore = 0

    if(playerScoreClass!==null){
        let trimPlayerScore = playerScoreClass.innerText;
        let trimComputerScore = computerScoreClass.innerText;
        playerScore = +trimPlayerScore.replace("Player Score : ", "")
        computerScore = +trimComputerScore.replace("Computer Score : ", "")
        playerScoreClass.remove();
        computerScoreClass.remove();
    }

    if(player){
        playerScore = +playerScore + 1; 
    } else {
        computerScore = +computerScore + 1;
    }

    playerScoreboard.classList.add('playerScore');
    playerScoreboard.style.color = 'white';
    playerScoreboard.textContent = "Player Score : " + playerScore;
    container.append(playerScoreboard);

    computerScoreboard.classList.add('computerScore');
    computerScoreboard.style.color = 'white';
    computerScoreboard.textContent = "Computer Score : " + computerScore;
    container.append(computerScoreboard);

    // Game Over Conditions
    if(playerScore==5){
        const finalWinner = document.createElement('span');
        const playAgain = document.createElement('span');
        finalWinner.classList.add('finalWinner');
        finalWinner.style.color = 'white';
        finalWinner.style.fontSize = "40px"
        finalWinner.textContent = "YOU WIN!!";
        playAgain.classList.add('playAgain');
        playAgain.style.color = 'white';
        playAgain.textContent = 'To play again, simply select Rock, Paper, or Scissors again!';       
        computerScoreboard.remove();    
        playerScoreboard.remove();  
        container.append(finalWinner);
        container.append(playAgain);     
    } else if(computerScore==5){
        const finalWinner = document.createElement('span');
        const playAgain = document.createElement('span');
        finalWinner.classList.add('finalWinner');
        finalWinner.style.color = 'white';
        finalWinner.style.fontSize = "40px"
        finalWinner.textContent = "COMPUTER WINS!!";
        playAgain.classList.add('playAgain');
        playAgain.style.color = 'white';
        playAgain.textContent = 'To play again, simply select Rock, Paper, or Scissors again!';       
        computerScoreboard.remove();    
        playerScoreboard.remove();  
        container.append(finalWinner);
        container.append(playAgain);         
    }

    console.log('Player ' + playerScore);
    console.log('Computer ' + computerScore);
}