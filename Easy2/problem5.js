const readline = require("readline-sync");

console.log("Enter the first number:");
let firstInput = readline.question();

console.log("Enter the Second number:");
let secondInput = readline.question();

let operations = (num1, num2) => {
  console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
  console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
  console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
  console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
  console.log(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`);
  console.log(`${num1} ** ${num2} = ${Number(num1) ** Number(num2)}`);
};

let results = operations(firstInput, secondInput);
console.log(results);
