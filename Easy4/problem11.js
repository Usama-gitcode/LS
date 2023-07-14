function numberToString(num) {
  if (num === 0) {
    return "0";
  }

  let result = "";

  while (num > 0) {
    const digit = num % 10;
    result = String(digit) + result;
    num = Math.floor(num / 10);
  }

  return result;
}

console.log(numberToString(0));     // Output: "0"
console.log(numberToString(4321));   // Output: "4321"
console.log(numberToString(5000));  // Output: "5000"
console.log(numberToString(987654)); // Output: "987654"
