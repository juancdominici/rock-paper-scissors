function game(){
    let counter;
    
    for(counter = 0; counter < 5; counter++) {
        let playerSelection = prompt("Rock, Paper, Scissors?", "Rock");
        let roundResult = 
        console.log(singleRound(playerSelection,computerPlay()));
    }
}

function computerPlay() {
    let roundMath = Math.floor(Math.random()* 3) - 1;
    let result;

    if (roundMath === 0){
        result = "Rock";
    } else if (roundMath === 1){
        result = "Paper";
    } else {
        result = "Scissors";
    }

    return result;
}
    
function singleRound (playerSelection, computerSelection) {

    let round = (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER")? `You lose! ${computerSelection} beats ${playerSelection}!` :
    (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS")? `You lose! ${computerSelection} beats ${playerSelection}!`:
    (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK")? `You lose! ${computerSelection} beats ${playerSelection}!`:
    (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")? `You win! ${playerSelection} beats ${computerSelection}!` :
    (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")? `You win! ${playerSelection} beats ${computerSelection}!`:
    (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS")? `You win! ${playerSelection} beats ${computerSelection}!`:
    "It's a tie!";

    return round;
}



game();


