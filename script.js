let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (number1,number2) => Math.abs(number1 - number2);

const compareGuesses = (userGuess, computerGuess, secretNumber) => { 
    // Distance represents distance from the secret number. The closest guess wins.
    if(userGuess < 0 || userGuess > 9) {
        alert('The guess is must be between 0 and 9');
      }
     return getAbsoluteDistance(secretNumber, userGuess) <= getAbsoluteDistance(secretNumber,computerGuess);
    
};

const updateScore = winner => {
    if(winner === 'human') {
        humanScore++;
    }else if(winner === 'computer') {
        computerScore++;
    }else {
        console.log('Invalid input');
    }
};

const advanceRound = () => {
    currentRoundNumber++;
}