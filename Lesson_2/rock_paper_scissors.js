const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

let youWon = 0;
let computerWon = 0;
let tie = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (playerWins(choice, computerChoice)) {
    youWon++;
    prompt(`You win!! your current score is ${youWon}`);
  } else if (choice === computerChoice) {
    prompt("Oopss!! Its a tie");
    tie++;
  } else {
    computerWon++;
    prompt(`Computer win!! computer current score is ${computerWon}`);
  }
}

function displayRoundWinners() {
  prompt(`Your Final score is ${youWon}`);
  prompt(`Computer score is ${computerWon}`);
  prompt(`${tie} rounds were tie`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
}

displayRoundWinners();
