// ask the user for the first number
// ask the user for the second number
// ask the user about what operation to perform
// print the result to the user

const readline = require("readline-sync");

console.log("Welcome to Calculator");

console.log("Please provide the first number?");
let number1 = readline.question();

console.log("Please provide the second number?");
let number2 = readline.question();

console.log(`${number1} ${number2}`);

console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / (number2);
}

console.log(`The result is ${output}`);