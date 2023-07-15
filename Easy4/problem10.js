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

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToNumber(string.slice(1, string.length));
    case "+":
      return stringToNumber(string.slice(1, string.length));
    default:
      return stringToNumber(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321);
// logs true
console.log(stringToSignedInteger("-570") === -570);
// logs true
console.log(stringToSignedInteger("+100") === 100);
// logs true
console.log(stringToSignedInteger("-570") === 570);
// logs false
console.log(stringToSignedInteger("570") === -570);
// logs false
