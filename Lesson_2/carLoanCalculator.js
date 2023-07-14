// const readline = require("readline-sync");

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function invalidNumber(number) {
//   return (
//     number.trimStart() === "" ||
//     Number(number) <= 0 ||
//     Number.isNaN(Number(number))
//   );
// }

// function cleaningInput(userInput) {
//   return userInput.replaceAll(',', '').replace('$', '').replace('%', '');
// }

// prompt("Welcome to Loan Calculator");

// while (true) {
//   prompt("What is your Loan amount");
//   let loanAmount = cleaningInput(readline.question());

//   while (invalidNumber(loanAmount)) {
//     prompt("Please enter a valid number");
//     loanAmount = readline.question();
//   }

//   prompt("What is your interest Rate");
//   let interestRate = cleaningInput(readline.question());

//   while (invalidNumber(interestRate)) {
//     prompt("Please enter a valid number");
//     interestRate = readline.question();
//   }

//   prompt("What is you loan duration in years");
//   let loanDuration = readline.question();

//   while (invalidNumber(loanDuration)) {
//     prompt("Please enter a valid number");
//     loanDuration = readline.question;
//   }

//   let monthlyInterestRate = (Number(interestRate / 100) / 12);
//   let months = Number(loanDuration) * 12;

//   let monthlyPayment =
//     Number(loanAmount) *
//     (monthlyInterestRate /
//       (1 - Math.pow(1 + monthlyInterestRate, -Number(months))));

//   console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

//   prompt("Do you want to perform another calculation?");
//   let answer = readline.question().toLowerCase();
//   while (answer[0] !== "n" && answer[0] !== "y") {
//     prompt('Please enter "y" or "n".');
//     answer = readline.question().toLowerCase();
//   }

//   if (answer[0] === "n") break;
// }


