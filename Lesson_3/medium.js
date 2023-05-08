// Question 1

let count = 1;
while (count <= 10) {
  console.log(" ".repeat(count) + "The Flinstones Rock!");
  count++;
}

for (let i = 1; i <= 10; i++) {
  console.log(" ".repeat(i) + "The Flinstones Rock!");
}

for (let i = 0; i < 10; i++) {
  let indent = "";
  for (let j = 0; j < i; j++) {
    indent += " ";
  }
  console.log(indent + "The Flintstones Rock!");
}

// Question 2
let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));

function newString(string) {
  let result = "";
  for (let index = 0; index < munstersDescription.length; index++) {
    let char = munstersDescription[index];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(newString(munstersDescription));

// Question 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(20));

