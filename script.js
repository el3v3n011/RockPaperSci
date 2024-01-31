let playerChoice;
let scores = { player: 0, computer: 0, ties: 0 };
let roundsPlayed = 0;

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function getPlayerChoice(choice) {
    playerChoice = choice;
    playRound();
}

function playRound() {
    let computerChoice = getComputerChoice();
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'The round is a tie! Rematch!';
        scores.ties++;
       
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You won! The computer chose ${computerChoice}`;
        scores.player++;
    } else {
        result = `The computer won! The computer chose ${computerChoice}`;
        scores.computer++;
    }

    console.log(result);
    updateResults(result);
    roundsPlayed++;

    if (roundsPlayed === 5) {
        endGame();
    }
}

function updateResults(result) {
    let resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML += `<p>${result}</p>`;
}

function startGame() {
    document.querySelector('.container').style.display = 'inline';
    document.querySelector('.startButton').style.display = 'none';
    scores = { player: 0, computer: 0, ties: 0 };
    roundsPlayed = 0;
    document.querySelector('.results').innerHTML = ''; // Clear previous results
   
}

function endGame() {
    console.log('Game Over! The Scores are:');
    console.log(`Player: ${scores.player}`);
    console.log(`Computer: ${scores.computer}`);
    console.log(`Ties: ${scores.ties}`);
}
