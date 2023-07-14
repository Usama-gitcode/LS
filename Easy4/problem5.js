function runningTotal(arr) {
  let newArr = [];
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    newArr.push((sum += arr[index]));
  }
  return newArr;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
