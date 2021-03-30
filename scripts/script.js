// PROMPT USER FOR CHOICE => CONVERT TO LOWERCASE => SAVE CHOICE TO USER INPUT
let userInput = prompt('Will it be Rock, Paper, or Scissors?');
userInput = userInput.toLowerCase();

// GET RANDOM COMPUTER CHOICE

function computerPlay() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    // COMPARE COMPUTER CHOICE => RETURN RESULT AS STRING
    if (computerNumber === 1) {
        computerChoice = 'rock';
        return computerChoice;
    } else if (computerNumber === 2) {
        computerChoice = 'paper';
        return computerChoice;
    } else {
        computerChoice = 'scissors';
        return computerChoice;
    };
    
}

// COMPARE USERINPUT WITH COMPUTER CHOICE

// function playRound(userInput, computerChoice) {

    
//     if (userInput != 'rock' || userInput != 'paper' || userInput != 'scissors') {
//         console.log('Please Enter a valid choice and try again!');
//     } else if (userInput === computerChoice) {
//         return console.log('Tie!');
//     } else if (userInput === 'rock' %% computerChoice === 'scissors') {
//         return console.log('You Win!');
//     } else if (userInput === 'scissors' && computerChoice === 'paper') {
//         return console.log('You Win!');
//     } else if (userInput === 'paper' && computerChoice === 'rock') {
//         return console.log('You win!');
//     } else {
//         return console.log('You lose!');
//     }

    

// }

// playRound();