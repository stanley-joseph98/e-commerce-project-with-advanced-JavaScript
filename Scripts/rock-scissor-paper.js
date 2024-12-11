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

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissor'){
    if (computerMove === 'rock'){
      result = 'You lose!';
    } else if (computerMove === 'paper'){
      result = `That's a win!!`
    } else if (computerMove === 'scissor'){
      result = `That's a tie!`
    }
  } else if (playerMove === 'paper'){
    if (computerMove === 'rock'){
      result = 'You win!';
    } else if (computerMove === 'paper'){
      result = `That's a tie!!`
    } else if (computerMove === 'scissor'){
      result = `You lose!`
    }
  } else if (playerMove === 'rock'){
    if (computerMove === 'rock'){
      result =  `That's a tie!`;
    } else if (computerMove === 'paper'){
      result = `You lose!!`
    } else if (computerMove === 'scissor'){
      result = `You win!`
    }
  } 
  alert (`You picked a ${playerMove}. The computer picked a ${computerMove}. ${result}`)
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