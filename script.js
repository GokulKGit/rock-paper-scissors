// Rock Paper Scissors

const choice = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

// Function
function playerGame(playerChoice) {
  // Get computer choice
  const computerChoice = choice[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice == computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissoers" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.innerText = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.innerText = computerScore;
      break;
  }
}
