function signedIntegerToString(num) {
  if (num === 0) {
    return "0";
  }

  let result = "";
  let isNegative = false;

  if (num < 0) {
    isNegative = true;
    num = -num;
  }

  while (num > 0) {
    const digit = num % 10;
    result = String(digit) + result;
    num = Math.floor(num / 10);
  }

  if (isNegative) {
    result = "-" + result;
  } else {
    result = "+" + result;
  }

  return result;
}

console.log(signedIntegerToString(0));      // Output: "+0"
console.log(signedIntegerToString(123));    // Output: "+123"
console.log(signedIntegerToString(4567));   // Output: "+4567"
console.log(signedIntegerToString(-987654)); // Output: "-987654"
