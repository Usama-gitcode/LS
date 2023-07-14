// How big is the room?

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter the length of the room in meters:');
let length = readline.question();
length = parseInt(length, 10);

prompt('Enter the width of the room in meters:');
let width = readline.question();
width = parseInt(width, 10);

let squareMeters = length * width;

let squareFoot = squareMeters * 10.7639;

console.log(`The area of the romm is ${squareMeters.toFixed(2)} square meters (${squareFoot.toFixed(2)}) square feet`);
