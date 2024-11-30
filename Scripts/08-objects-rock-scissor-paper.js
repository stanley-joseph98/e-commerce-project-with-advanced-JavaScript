/* function Rock() {
  let computerMove = '';
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissor'

  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'rock') {
    result = `That's a tie!`;

  } else if (computerMove === 'paper'){
    result = 'You lose!';
  } else if (computerMove === 'scissor'){
    result = 'You win!';
  }

  alert (`You picked rock. The computer picked ${computerMove}. ${result}`)
}


function Paper() {
  let computerMove = '';
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissor'

  }
  

  let result = '';

  if (computerMove === 'rock') {
    result = `You win!`;

  } else if (computerMove === 'paper'){
    result = 'That is a tie!';
  } else if (computerMove === 'scissor'){
    result = 'You lose!';
  }

  alert (`You picked paper. The computer picked ${computerMove}. ${result}`)
}

function Scissor() {
  let computerMove = '';
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissor'

  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'rock') {
    result = `You lose!`;

  } else if (computerMove === 'paper'){
    result = 'You win!';
  } else if (computerMove === 'scissor'){
    result = `That's a tie!`;
  }

  alert (`You picked scissor. The computer picked ${computerMove}. ${result}`)
}
  */

//How to modify the above codes to one simple code using functions  and parameters

//


// To Keep track of the scores using objects, Retrieve the item stored in localStorage or initialize it then convert it to JSON object using JSON.parse()
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

console.log('Score:', score);

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissor'){
    if (computerMove === 'rock'){
      result = 'You lose!';
    } else if (computerMove === 'paper'){
      result = 'You win!';
    } else if (computerMove === 'scissor'){
      result = `That's a tie!`;
    }
  } else if (playerMove === 'paper'){
    if (computerMove === 'rock'){
      result = 'You win!';
    } else if (computerMove === 'paper'){
      result = `That's a tie!`;
    } else if (computerMove === 'scissor'){
      result = 'You lose!';
    }
  } else if (playerMove === 'rock'){
    if (computerMove === 'rock'){
      result =  `That's a tie!`;
    } else if (computerMove === 'paper'){
      result = 'You lose!'
    } else if (computerMove === 'scissor'){
      result = 'You win!';
    }
  } 

  //  Update the score every times we play a game

  if (result === 'You win!'){
    score.wins += 1;
  } else if (result === 'You lose!'){
    score.losses += 1;
  } else if (result === `That's a tie!`){
    score.ties +=1;
  }

  //Local storage to persist this storage in localStorage using setItem() which stores only strings.
  //We could have used localStorage.setItem('message', score); but since localStorage only works with strings, we ought to use JSON.stringify(score) as below.
  localStorage.setItem('score', JSON.stringify(score));
  //To retrieve the stored item, use getItem() up there;


  alert (`You picked a ${playerMove}. The computer picked a ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.losses}`)
}

function pickComputerMove(){
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'scissor';

    }

    return computerMove;
}