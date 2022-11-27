// create function getComputerChoice to make computer play,
// return rock, paper, or scissors randomly from computer.
// make function that is for a single round of game with two parameters (playerSelection, computerSelection),
// make a return string that declares winner of round function ( ex: 'You Lose! Paper beats Rock),
// playerSelection parameter must be made case insensitive !!!
// make function game(),
// call the round function inside of game(),
// 5 round game that keeps score and reports a winner or loser at the end.
 
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    getComputerChoice = choices;
    return choices[Math.floor(Math.random()* choices.length)]
}
console.log(getComputerChoice())

function gameRound(playerSelection, computerSelection){
    
}
console.log(gameRound())