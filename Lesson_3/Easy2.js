// Question 1

let advice = "Few things in life are important as training your pet dinosaur";
console.log(advice.replace('important', 'urgent'));

// Question 2
let numbers = [1, 2, 3, 4, 5];
let reversedNum = [];

numbers.forEach((num) => reversedNum.unshift(num));
console.log(reversedNum);

// 2nd method
let reverseNum = numbers.slice().reverse();
console.log(reverseNum);

// Question 3
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;
let number2 = 95;

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// Question 4
let famousWords = "seven years ago...";

console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));

// Question 5
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2,1);
console.log(numbers);

// Question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newArray = flintstones.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);

console.log(newArray);

// Question 7
let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

console.log(
  Object.entries(flintstones)
    .filter((pair) => pair[0] === "Barney")
    .shift()
);

// Question 8
let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

console.log(Array.isArray(numbers));

// Question 9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
console.log(padding);

// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === "t").length);