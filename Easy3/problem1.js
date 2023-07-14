// consecutive characters

function crunch(string) {
  let collapsedString = "";

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index + 1]) {
      collapsedString += string[index];
    }
  }
  return collapsedString;
}

console.log(crunch("ddaaiillyy ddoouubbllee"));// "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
