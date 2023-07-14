// Tip Calculator

const readline = require("readline-sync");

console.log("What is the bill?");
let bill = readline.question();

console.log("What is the tip percentage?");
let percentage = readline.question();

function getpercentageCalculator() {
  let percentageCal =  (bill * percentage) / 100;
  return percentageCal;
}

let percentageCal = getpercentageCalculator();

function totalBill() {
  return percentageCal + Number(bill);
}

console.log(`The tip is $${getpercentageCalculator()}`);

console.log(`The total is $${totalBill()}`);