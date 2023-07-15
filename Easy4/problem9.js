// Write a function that takes a string of digits and returns the appropriate number as an integer.
// don't use any of the built-in methods like `number` or `parseInt`

function stringToNumber(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let arrayOfDigits = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    arrayOfDigits.push(DIGITS[char]);
  }

  let value = 0;
  for (let i = 0; i < arrayOfDigits.length; i++) {
    const digit = arrayOfDigits[i];
    value = 10 * value + digit;
  }

  return value;
}

console.log(stringToNumber("123")); // Output: 123
console.log(stringToNumber("4567")); // Output: 4567
console.log(stringToNumber("987654")); // Output: 987654

// function stringToInteger(input) {
//   return input * 1;
// }
