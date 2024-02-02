let win = 0,
  lose = 0,
  round = 0;

playGame();

function getComputerChoice() {
  let hand = Math.floor(Math.random() * 3) + 1;
  if (hand === 1) {
    return "batu";
  } else if (hand === 2) {
    return "kertas";
  } else {
    return "gunting";
  }
}

function playRound(playerSelection, computerSelection) {
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Draw");
  } else if (
    (playerSelection === "batu" && computerSelection === "gunting") ||
    (playerSelection === "gunting" && computerSelection === "kertas") ||
    (playerSelection === "kertas" && computerSelection === "batu")
  ) {
    console.log("Win");
    win++;
  } else {
    console.log("Lose");
    lose++;
  }
}

function playGame(playerChoice) {
  const computerSelection = getComputerChoice();
  playRound(playerChoice, computerSelection);
  round++;

  console.log(
    "Hasil: Menang - " +
      win +
      ", Kalah - " +
      lose +
      ", Seri - " +
      (round - win - lose)
  );
}
