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

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(0)); // Output: "+0"
console.log(signedIntegerToString(123)); // Output: "+123"
console.log(signedIntegerToString(4567)); // Output: "+4567"
console.log(signedIntegerToString(-987654)); // Output: "-987654"
