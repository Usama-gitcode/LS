function penultimate(words) {
  let wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
}


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// const penultimate1 = (str) => {
//   let arr = str.split(" ");
//   arr.pop();
//   return arr.pop();
// };

// const penultimate3 = (str) => {
//   let arr = str.split(" ");
//   return arr.slice(-2)[0];
// };

// const penultimate4 = (str) => {
//   let arr = str.split(" ");
//   return arr.splice(arr.length - 2, 1)[0];
// };

// const penultimate5 = (str) => str.split(" ").reverse()[1];
