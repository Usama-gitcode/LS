// Question 2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.includes('!'));
console.log(str2.endsWith('!'));

// Question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty('Spot'));

// Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let lowerCase =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(lowerCase);

// Question 6

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

console.log(Object.assign(ages, additionalAges));

// Question 7

let str1 = "Few things in life are important house training your pet";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

// Question 8

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);

// Question 9

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");

// Question 10

let advice = "Few things in life are important as house training your pet";

let newString =  advice.slice(0, advice.indexOf('house'));
console.log(newString);
