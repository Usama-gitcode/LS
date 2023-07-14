// Write a function that takes a string of digits and returns the appropriate number as an integer.
// don't use any of the built-in methods like `number` or `parseInt`

function stringToNumber(str) {
  const digits = {
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

  let result = 0;
  let multiplier = 1;

  for (let i = str.length - 1; i >= 0; i--) {
    const digit = digits[str[i]];
    if (digit !== undefined) {
      result += digit * multiplier;
      multiplier *= 10;
    } else {
      throw new Error("Invalid digit: " + str[i]);
    }
  }

  return result;
}

console.log(stringToNumber("123")); // Output: 123
console.log(stringToNumber("4567")); // Output: 4567
console.log(stringToNumber("987654")); // Output: 987654


// function stringToInteger(input) {
//   return input * 1;
// }
