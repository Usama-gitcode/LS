function multisum(num) {
  let result = 0;

  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      result += index;
    }
  }
  return result;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
