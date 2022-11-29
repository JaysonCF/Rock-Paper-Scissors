// Information "Storage"
const options = ['rock', 'paper', 'scissors'];



// Computer Selection 
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
getComputerChoice();


// Checks For Winner 
function getWinner(playerSelection, computerSelection){
    console.log('-------');
    if(playerSelection == computerSelection){
        return 'Tie';
    }
    else if(
    (playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        return 'Player'
    }
    else{
        return 'Computer'
    }
}
getWinner()


// Round In Game
function playRound(playerSelection, computerSelection){
    const result = getWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
        return 'It was a tie';
    }
    else if(result == 'Player'){
        return `Player Wins! ${playerSelection} beats ${computerSelection}!`;
    }
    else{
        return `Computer Wins! ${computerSelection} beats ${playerSelection}!`;
    }
}


// Player Selection
function getPlayerChoice(){
    let validateInput = false;
    while(validateInput == false){
        const choices = prompt('Type Rock, Paper, Scissors');
        if(choices == null){
            continue;
        }
        const choicesLowerCase = choices.toLowerCase();
        if(options.includes(choicesLowerCase)){
            validateInput = true;
            return choicesLowerCase;
        }
    }
}


// Game
function game(){
    let pScore = 0;
    let cScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if(getWinner(playerSelection, computerSelection) == 'Player'){
            pScore++;
        }
        else if(getWinner(playerSelection, computerSelection) == 'Computer'){
            cScore++;
        }
    }
    console.log('Finished');
    if(pScore > cScore){
        console.log(`Player Wins! Awesome! Your score ${pScore}`);
    }
    else if (pScore < cScore){
        console.log(`Computer Wins! Try Again! Computer score ${cScore}`);
    }
    else{
        console.log('TIE GAME!!');
    }
}
game()