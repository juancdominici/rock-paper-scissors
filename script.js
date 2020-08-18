const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
let roundCounter = 0;


function computerPlay() {
    let roundMath = Math.floor(Math.random() * 3) - 1;
    let result;

    if (roundMath === 0) {
        return result = "Rock";
    } else if (roundMath === 1) {
        return result = "Paper";
    } else {
        return result = "Scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    
    let round = (player === "Rock" && computer === "Paper") ? `You lose! Paper beats Rock!` :
    (player === "Paper" && computer === "Scissors") ? `You lose! Scissors beats Paper!` :
    (player === "Scissors" && computer === "Rock") ? `You lose! Rock beats Scissors!` :
    (player === "Paper" && computer === "Rock") ? `You win! Paper beats Rock!` :
    (player === "Scissors" && computer === "Paper") ? `You win! Scissors beats Paper!` :
    (player === "Rock" && computer === "Scissors") ? `You win! Rock beats Scissors!` :
    "It's a tie!";

    return round;
}

function rockRnd(){
    const log = document.querySelector('#id');

    const content = document.createElement('li');
    content.textContent = `Round N°${roundCounter}${singleRound("Rock", computerPlay())}`;
    
    log.appendChild(content);
    roundCounter++;
};
function paperRnd(){
    const log = document.querySelector('#id');

    const content = document.createElement('li');
    content.textContent = `Round N°${roundCounter}${singleRound("Paper", computerPlay())}`;

    log.appendChild(content);
    roundCounter++;
};
function scissorsRnd(){
    const log = document.querySelector('#id');

    const content = document.createElement('li');
    content.textContent = `Round N°${roundCounter} ${singleRound("Scissors", computerPlay())}`;

    log.appendChild(content);
    roundCounter++;
} 

// function checkForRoundStart(){

// }

// window.addEventListener("click", () => checkForRoundStart);

rockbtn.addEventListener("click", () => rockRnd());
paperbtn.addEventListener("click", () => paperRnd());
scissorsbtn.addEventListener("click", () => scissorsRnd());

