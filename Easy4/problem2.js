function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("356653"));
console.log(isPalindrome("Madam"));
