let playerSelection = prompt("rock, paper or scissors?");

      function getComputerChoice() {
        let randomNum = Math.floor(Math.random() * 3);

        switch (randomNum) {
          case 0:
            return "rock";
            break;
          case 1:
            return "paper";
            break;
          case 2:
            return "scissors";
            break;
        }
      }
      const computerSelection = getComputerChoice();
      console.log("computer:" + computerSelection);
      console.log("player:" + playerSelection);
      function playRound(playerSelection, computerSelection) {
        // your code here!

        if (computerSelection == "scissors" && playerSelection == "paper") {
          console.log("You loose!");
        } else if (
          computerSelection == "scissors" &&
          playerSelection == "rock"
        ) {
          console.log("You win!");
        } else if (
          computerSelection == "paper" &&
          playerSelection == "scissors"
        ) {
          console.log("You win!");
        } else if (computerSelection == "paper" && playerSelection == "rock") {
          console.log("You loose!");
        } else if (computerSelection == "rock" && playerSelection == "paper") {
          console.log("You win!");
        } else if (
          computerSelection == "rock" &&
          playerSelection == "scissors"
        ) {
          console.log("You loose!");
        } else if (computerSelection == playerSelection) {
          console.log("Draw!");
        }
      }

      playRound(playerSelection, computerSelection);
