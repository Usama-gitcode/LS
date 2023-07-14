// ask the user for the first number
// ask the user for the second number
// ask the user about what operation to perform
// print the result to the user

const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}


prompt(MESSAGES["welcome"]);

while (true) {
  prompt(MESSAGES["enterNum1"]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES["enterValidNum"]);
    number1 = readline.question();
  }

  prompt(MESSAGES["enterNum2"]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES["enterValidNum"]);
    number2 = readline.question();
  }

  prompt(
    "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
  );
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  // if (operation === '1') {
  //   output = Number(number1) + Number(number2);
  // } else if (operation === '2') {
  //   output = Number(number1) - Number(number2);
  // } else if (operation === '3') {
  //   output = Number(number1) * Number(number2);
  // } else if (operation === '4') {
  //   output = Number(number1) / (number2);
  // }

  console.log(`The result is ${output}`);

  prompt("Would you like to perform another operation? (y/n)");
  let answer = readline.question();

  if (answer !== "y") break;
}
