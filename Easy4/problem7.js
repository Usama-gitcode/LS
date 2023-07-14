function wordSizes(str) {
  let words = str.replace(/[^\w\s]/gi, "").split(" ");
  let count = {};
  for (let i = 0; i < words.length; i++) {
    let w = words[i].length;
    if (w in count) {
      count[w] += 1;
    } else {
      count[w] = 1;
    }
  }
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}