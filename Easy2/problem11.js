function centerOf(string) {
  const length = string.length;
  const middleChar = Math.floor(string.length / 2);

  if (length % 2 === 1) {
    return string[middleChar];
  } else {
    return string.slice(middleChar - 1, middleChar + 1);
  }
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x"));// "x"
