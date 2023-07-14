const readline = require("readline-sync");

console.log("What is your age?");
let getAge = Number(readline.question());

console.log("At what age would you like to retire?");
let getRetireAge = Number(readline.question());

const currentYear = new Date().getFullYear();

function retireYear() {
  return ((currentYear + getRetireAge) - getAge);
}

let retirementYear = retireYear();

console.log(retirementYear);
console.log(`You have only ${retirementYear - currentYear} of work to go!`);
