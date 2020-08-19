const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let roundMath = Math.floor(Math.random() * 3) - 1;
    let result = "";

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
    let round = "";



    if (player === "Rock" && computer === "Paper") {
        computerScore += 1;
        round = `You lose! Paper beats Rock!`
    } else if (player === "Paper" && computer === "Scissors") {
        computerScore += 1;
        round = `You lose! Scissors beats Paper!`;
    } else if (player === "Scissors" && computer === "Rock") {
        computerScore += 1;
        round = `You lose! Rock beats Scissors!`;
    } else if (player === "Paper" && computer === "Rock") {
        playerScore += 1;
        round = `You win! Paper beats Rock!`;
    } else if (player === "Scissors" && computer === "Paper") {
        playerScore += 1;
        round = `You win! Scissors beats Paper!`;
    } else if (player === "Rock" && computer === "Scissors") {
        playerScore += 1;
        round = `You win! Rock beats Scissors!`;
    } else if (player === computer) {
        round = "It's a tie!"
    }

    playerScoreContent.textContent = `Player: ${playerScore}`;
    computerScoreContent.textContent = `Computer: ${computerScore}`;
    return round;
}

function rockRnd() {
    const log = document.querySelector('#log');

    const content = document.createElement('li');
    content.textContent = `Round N°${roundCounter}: ${singleRound("Rock", computerPlay())}`;

    log.appendChild(content);
    roundCounter++;
    checkFinish();
};
function paperRnd() {
    const log = document.querySelector('#log');

    const content = document.createElement('li');
    content.textContent = `Round N°${roundCounter}: ${singleRound("Paper", computerPlay())}`;

    log.appendChild(content);
    roundCounter++;
    checkFinish();
};
function scissorsRnd() {
    const log = document.querySelector('#log');

    const content = document.createElement('li');
    content.textContent = `Round N°${roundCounter}: ${singleRound("Scissors", computerPlay())}`;

    log.appendChild(content);
    roundCounter++;
    checkFinish();
}

const checkFinish = () => {

    if (playerScore == 5) {
        alert("You've won!");
        roundCounter = 1;
        playerScore = 0;
        computerScore = 0;
        const log = document.querySelector('#log');
        log.innerHTML = "";
    } else if (computerScore == 5) {
        alert("You've lost!");
        roundCounter = 1;
        playerScore = 0;
        computerScore = 0;
        const log = document.querySelector('#log');
        log.innerHTML = "";
    }

}



rockbtn.addEventListener("click", () => rockRnd());
paperbtn.addEventListener("click", () => paperRnd());
scissorsbtn.addEventListener("click", () => scissorsRnd());

const playerScoreDoc = document.querySelector('ul.score');
const computerScoreDoc = document.querySelector('ul.score');

const playerScoreContent = document.createElement('li');
const computerScoreContent = document.createElement('li');

playerScoreContent.classList.add('playerScore');
computerScoreContent.classList.add('computerScore');

playerScoreContent.textContent = `Player: ${playerScore}`;
computerScoreContent.textContent = `Computer: ${computerScore}`;

playerScoreDoc.appendChild(playerScoreContent);
computerScoreDoc.appendChild(computerScoreContent);
