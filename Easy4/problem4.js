function isPalindromicNumber(number) {
  return isRealPalindrome(String(number));
}

function isRealPalindrome(str) {
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = alphanumericStr.split("").reverse().join("");

  return alphanumericStr === reversedStr;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true