// Global
let playerScore = 0;
let computerScore = 0;
let choices = ['rock', 'paper', 'scissors'];

const uiPlayerScore = document.querySelector('.actualPScore');
const uiCScore = document.querySelector('.actualCScore');
const uiGScore = document.querySelector('.actualGScore');


// RESET BUTTON !
const resetBtn = document.querySelector('.resetbtn');
resetBtn.addEventListener('click', () =>{
  uiPlayerScore.textContent = 0;
  uiCScore.textContent = 0;
  uiGScore.textContent = 'Game Restarted!';
  playerScore = 0;
  computerScore = 0;
})


// Computer Random Choice
function getComputerChoice(){
  let cChoices = choices[Math.floor(Math.random()*choices.length)];
  return cChoices
}


// Game + Player Selection
  let playerSelection;
  const rock = document.getElementById('choiceR')
    rock.addEventListener('click', () =>{
    playerSelection = 'rock';
    let cChoices = getComputerChoice();
    getCheck(cChoices);
    uiPlayerScore.textContent = playerScore;
    uiCScore.textContent = computerScore;
  })
  const paper = document.getElementById('choiceP')
    paper.addEventListener('click', () => {
    playerSelection = 'paper';
    let cChoices = getComputerChoice();
    getCheck(cChoices);
    uiPlayerScore.textContent = playerScore;
    uiCScore.textContent = computerScore;
  });
  const scissors = document.getElementById('choiceS')
    scissors.addEventListener('click', () => {
    playerSelection ='scissors';
    let cChoices = getComputerChoice();
    getCheck(cChoices);
    uiPlayerScore.textContent = playerScore;
    uiCScore.textContent = computerScore;
  });


// Checks Winner
function getCheck(cChoices){
if(playerSelection === 'rock' && cChoices === 'scissors'){
  uiGScore.textContent = 'Player Wins!';
  return playerScore++;
}else if(playerSelection === 'paper' && cChoices === 'rock'){
  uiGScore.textContent = 'Player Wins!';
  return playerScore++;
}else if(playerSelection === 'scissors' && cChoices === 'paper'){
  uiGScore.textContent = 'Player Wins!';
  return playerScore++;
}else if(playerSelection === 'scissors' && cChoices === 'rock'){
  uiGScore.textContent = 'Computer Wins!';
  return computerScore++;
}else if(playerSelection === 'rock' && cChoices === 'paper'){
  uiGScore.textContent = 'Computer Wins!';
  return computerScore++;
}else if(playerSelection === 'paper' && cChoices === 'scissors'){
  uiGScore.textContent = 'Computer Wins!';
  return computerScore++;
}else{
  uiGScore.textContent = 'Tie!';
}
}
