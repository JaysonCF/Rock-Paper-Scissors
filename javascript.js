const choices = ['rock', 'paper', 'scissors']
const winners = [];

function game(){
    //play game
    //play 5 rounds in the game 
    for (i = 1; i <= 5; i ++){
        playRound(i);
    }
    logWins();
}

function playRound(round){
    //round of the game 
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
    //players choice 
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            'Type Rock, Paper, or Scissors. Caps does not matter but spelling does!'
        );
        while (input == null) {
            input = prompt('Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}
    
function computerChoice(){
    //computers choice
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    //validates the input
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    //checks to see who won
    if (choiceP === choiceC){
        return 'TIE!';
    } else if ((choiceP === 'rock' && choiceC === 'scissors') || 
    (choiceP ==='paper' && choiceC === 'rock') || 
    (choiceP === 'scissors' && choiceC === 'paper')){
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logWins(){
    //logs the wins of game
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'TIE!').length;
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    //logs the round winner
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'Won the Round!');
    console.log('--------------------------');
}


game();
