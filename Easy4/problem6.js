function wordSizes(str) {
  let words = str.split(" ");
  let count = {};

  for (let index = 0; index < words.length; index++) {
    let size = words[index].length;
    if (size > 0) {
      if (count[size]) {
        count[size] = count[size] + 1;
      } else {
        count[size] = 1;
      }
    }
  }
  return count;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}


// function wordSizes(str) {
//   let words = str.split(" ");
//   let count = {};
//   for (let i = 0; i < words.length; i++) {
//     let w = words[i].length;
//     if (w in count) {
//       count[w] += 1;
//     } else {
//       count[w] = 1;
//     }
//   }
//   return count;
// }

// Initialize 'words' array, all the words in inputted string
// Initialize empty 'count' object, to store lengths of each word
// Loop through words array and check if that word's length is already in the count object or not.
//  If it is, add 1 to its count. If it is not, add it to the 'count' object, and set its value to 1.
// Finally, return the count object so we can see the lengths of each word in the string, and how many of those words had the same lengths/were unique in length.