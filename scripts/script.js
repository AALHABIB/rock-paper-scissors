

// GET RANDOM COMPUTER CHOICE

function computerPlay() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    // COMPARE COMPUTER CHOICE => RETURN RESULT AS STRING
    if (computerNumber === 1) {
        computerChoice = 'Rock';
        return computerChoice;
    } else if (computerNumber === 2) {
        computerChoice = 'Paper';
        return computerChoice;
    } else {
        computerChoice = 'Scissors';
        return computerChoice;
    };
    
}
