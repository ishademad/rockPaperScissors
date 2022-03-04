const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') ? userInput : 'Wrong input'
  }
  
  const getComputerChoice = () => {
    num= Math.floor(Math.random()*3);
    switch(num) {
      case 0: return 'rock';
      case 1: return 'paper';
      case 2: return 'scissors';
    }
  }
  
  const determineWinner = (userChoice,computerChoice) => {
      if (userChoice === computerChoice) {
        return 'It was a tie';
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'paper'){
              return 'Computer Wins';
        } else if (computerChoice === 'scissors') {
              return 'User Wins';
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'rock'){
              return 'User Wins';
        } else if (computerChoice === 'scissors') {
              return 'Computer Wins';
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock'){
              return 'Computer Wins';
        } else if (computerChoice === 'paper') {
              return 'User Wins';
        }
      }
  }
  
  const playGame = () => {
    userChoice= getUserChoice('bomb');
    if (userChoice === 'bomb') {
        console.log('User always wins when he uses bomb');
        return;
      }
    console.log(`The User choice is ${userChoice}`);
    computerChoice = getComputerChoice();
    console.log(`The computer choice is ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();
