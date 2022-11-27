const choices = ['rock', 'paper', 'scissors']

function game(){
    //play game
    //play 5 rounds in the game 
    playRound();
}

function playRound(playerSelection, computerSelection){
    //round of the game 
    playerSelection = playerChoice();
    computerSelection = computerChoice();
}

function playerChoice(){
    //players choice 
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();


    console.log(input);
}

function computerChoice(){
    //computers choice
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){

}


game();
