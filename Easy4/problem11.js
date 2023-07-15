function integerToString(num) {
  if (num === 0) return "0";

  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let StringIntegers = "";

  while (num > 0) {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    StringIntegers = DIGITS[remainder] + StringIntegers;
  }
  return StringIntegers;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(5439890));
