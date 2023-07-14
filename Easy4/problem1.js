let readlineSync = require("readline-sync");

let numbers = [];

console.log("Enter the 1st number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 2nd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 3rd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 4th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 5th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the last number:");
const lastNumber = Number(readlineSync.prompt());

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
}