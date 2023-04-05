// const playerSelection = () => {
//   let btn = document.querySelector("#rps");
//   return btn.value;
//   console.log("player:" + playerSelection);
// };

///////// GET A RANDOM CHOICE FOR THE COMPUTER


let computerSelection;
let playerSelection;
let yScore = 0;
function selectRock() {
    let btn = document.querySelector("#rock");
    playerSelection = btn.value;
    console.log(btn.value);
    
    playRound(playerSelection, computerSelection);
    
  }
function selectPaper() {
  let btn = document.querySelector("#paper");
   playerSelection = btn.value;
  console.log(btn.value);
  
    playRound(playerSelection, computerSelection);
 
}
function selectSciss() {
  let btn = document.querySelector("#scissors");
  playerSelection = btn.value;
  console.log(btn.value);
  
    playRound(playerSelection, computerSelection);
}

const rpsResult = document.querySelector(".rpsResult");
const resultScore = document.querySelector(".result");
const yourScore = document.createElement("p");
resultScore.insertBefore(yourScore,resultScore.lastElementChild);

const resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener('click', () => {
  yScore = 0;
  rpsResult.textContent = "";
  yourScore.textContent = "";  
});



function playRound(playerSelection, computerSelection) {

  
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
  computerSelection = getComputerChoice();
console.log("computer:" + computerSelection);


  
  if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")  ||
    (computerSelection == "rock" && playerSelection == "scissors"))
    {
    rpsResult.textContent = "You loose! Your scrore is ";
    yScore--;
    } else if (
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper")  ||
    (computerSelection == "scissors" && playerSelection == "rock") ) 
    { 
    rpsResult.textContent = "You win!  Your scrore is ";
    yScore++;
    } else if (computerSelection == playerSelection) {
    console.log("Draw!");
    rpsResult.textContent = "Draw!  Your scrore is ";
    }

  yourScore.textContent = yScore;
 
  
}




