const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener("click", function () {
  play("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  play("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  play("scissors");
});

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win!";
  } else {
    result = "You Lose";
  }

  const resultMessage = `
    You Haven Chosen: ${playerChoice}.
    The Result is: ${computerChoice}.
    ${result}
  `;
  
  alert(resultMessage);
}