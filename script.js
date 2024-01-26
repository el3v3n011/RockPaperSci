let getComputerChoice=getComputerChoice=>{
    let randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}


function playRound(playerChoice, computerChoice){
    if(playerChoice===computerChoice){
       
       return 'The game is a tie!';
    }
    if(playerChoice==='rock'){
        if(computerChoice==='paper'){
            return 'The computer won!! He chose paper';
        }else{
            return 'You won! The computer chose scissors';
        }
    }
    if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'The computer won! computer chose scissors';
        }else{
            return 'You won!The computer chose rock';
        }
    }
    if(playerChoice==='scissors'){
        if(computerChoice==='rock'){
            return 'The computer won! The computrt chose rock';
        }else{
            return 'You won! The computer chose paper';
        }
    }
}
function game(){
    let scores = {player:0, computer:0};
    for(let i=0; i<5; i++){
        let playerChoice=prompt('Choose rock, paper or scissors');
        let computerChoice=getComputerChoice();
        let result=playRound(playerChoice.toLowerCase(), computerChoice);
        console.log(result);
        if (result.includes('tie')) {
            game();
        }
        if(result.includes('You won')){
            scores.player++;
        }else if(result.includes('The computer won')){
            scores.computer++;
        }

    }
    console.log(scores);
}
game();

