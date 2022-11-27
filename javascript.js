// create function getComputerChoice to make computer play,
// return rock, paper, or scissors randomly from computer.
// make function that is for a single round of game with two parameters (playerSelection, computerSelection),
// make a return string that declares winner of round function ( ex: 'You Lose! Paper beats Rock),
// playerSelection parameter must be made case insensitive !!!
// make function game(),
// call the round function inside of game(),
// 5 round game that keeps score and reports a winner or loser at the end.
 
const options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'Tie'
    }
    else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors')
        (playerSelection == 'Paper' && computerSelection == 'Rock')
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ){
    return 'Player';
    }  
    
    else {
        return 'Computer'
    }
    
}
