// Question 1
let numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);
console.log(numbers);

console.log(numbers.length = 0);

while (numbers.length) {
  numbers.pop();
}

// Question 5
function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValidTwo = color => color === 'blue' || color === 'green';

console.log(isColorValidTwo('green'));