// const playerSelection = () => {
//   let btn = document.querySelector("#rps");
//   return btn.value;
//   console.log("player:" + playerSelection);
// };
let playerSelection;
function selectRock() {
    let btn = document.querySelector("#rock");
     playerSelection = btn.value;
    console.log(btn.value);
  }
function selectPaper() {
  let btn = document.querySelector("#paper");
    playerSelection = btn.value;
  console.log(btn.value);
}
function selectSciss() {
  let btn = document.querySelector("#scissors");
    playerSelection = btn.value;
  console.log(btn.value);
}

const rpsResult = document.querySelector(".rpsResult");

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
  let a;
  if (computerSelection == "scissors" && playerSelection == "paper") {
    console.log("You loose!");
    a == -1;
  } else if (
    computerSelection == "scissors" && playerSelection == "rock"
  ) {
    console.log("You win!");
    a == 1;
  } else if (
    computerSelection == "paper" && playerSelection == "scissors"
  ) {
    console.log("You win!");
    a == 1;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("You loose!");
    a == -1;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    console.log("You win!");
    a == 1;
  } else if (
    computerSelection == "rock" && playerSelection == "scissors"
  ) {
    console.log("You loose!");
    a == -1;
  } else if (computerSelection == playerSelection) {
    console.log("Draw!");
    a == 0;
  }

  function result () {
    let b = 0;
    if (a == 1) {
      b += a;
      rpsResult.textContent = "You win! Your score is `${b}`";
    } else if (a == -1) {
      b += a;
      rpsResult.textContent = "You loose! Your score is `${b}`";
    } else {
      b += a; 
      rpsResult.textContent = "Draw! Your score is `${b}`";
    }


  }
}

playRound(playerSelection, computerSelection);
