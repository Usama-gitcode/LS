function swap(str) {
  let words = str.split(" ");
  let result = [];

  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let swapped = swapLetter(word);
    result.push(swapped);
  }
  return result.join(" ");
}

function swapLetter(word) {
  if (word.length === 1) {
    return word;
  }
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap("Oh what a wonderful day it is"));
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a"));
