// Information "Storage"
const options = ['rock', 'paper', 'scissors'];


// Computer Selection 
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    console.log(choice);
}
getComputerChoice()