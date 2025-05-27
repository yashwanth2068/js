let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();
    /*
    if (score === null) {
      score = {
      wins: 0,
      losses: 0,
      ties: 0
      };
      
   
    }*/
      let isAutoPlaying = false;
      let intervalId;
      function autoPlay(){
        if(!isAutoPlaying){
         // const 
         intervalId =  setInterval (function() {
          const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
        
      }

    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      console.log(pickComputerMove());
      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose';
        } else if (computerMove === 'paper') {
          result = 'You win';
        } else {
          result = 'Tie';
        }
      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win';
        } else if (computerMove === 'paper') {
          result = 'Tie';
        } else {
          result = 'You lose';
        }
      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie';
        } else if (computerMove === 'paper') {
          result = 'You lose';
        } else {
          result = 'You win';
        }
      }

      if (result === 'You win') {
        score.wins += 1;
      } else if (result === 'You lose') {
        score.losses += 1;
      } else {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You 
    <img src="${playerMove}-emoji.png" class="move-icon">
  <img src="${computerMove}-emoji.png" class="move-icon">Computer`;

      
    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      if (randomNumber < 1/3) {
        return 'rock';
      } else if (randomNumber < 2/3) {
        return 'paper';
      } else {
        return 'scissors';
      }
    }
