// COMPUTER RANDOM SELECTION
let computerChoices = Math.floor(Math.random()* 3);
let computerSelection = computerChoices;
if (computerSelection == 0){
    computerSelection = 'rock';
}else if (computerSelection == 1){
    computerSelection = 'paper';
}else if (computerSelection == 2){
    computerSelection = 'scissors';
}
console.log(computerSelection)

