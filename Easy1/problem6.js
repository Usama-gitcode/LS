// Sum or Product of Consecutive Integers

const readline = require("readline-sync");

console.log("Please enter an integer greater than 0:");
let input = readline.question();

while (invalidEntry(input)) {
  console.log("Please enter a valid number");
  input = readline.question();
}

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let operation = readline.question();

while (!["s", "p"].includes(operation)) {
  console.log('Please enter "s" for sum or "p" for multiplication');
  operation = readline.question();
}

function invalidEntry(num) {
  return (
    num.trimStart() === "" || Number(num) <= 0 || Number.isNaN(Number(num))
  );
}

function calculateProduct(userInput) {
  let total = 1;

  for (let num = 1; num <= userInput; num++) {
    total *= num;
  }
  return total;
}

function calculateSum(userInput) {
  let sum = 0;

  for (let num = 1; num <= userInput; num++) {
    sum += num;
  }
  return sum;
}

if (operation === "p") {
  let Product = calculateProduct(input);
  console.log(`The product of integers between 1 and ${input} is ${Product}`);
} else if (operation === "s") {
  let Sum = calculateSum(input);
  console.log(`The sum of integers between 1 and ${input} is ${Sum}`);
} else {
  console.log("Invalid Entry");
}
