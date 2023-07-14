function xor(num1, num2) {
  if ((num1 && !num2) || (num2 && !num1)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(1, 1) === false);
console.log(xor(1, 1) === false);

// function xor(arg1, arg2) {
//   if ((arg1 || arg2) && !(arg1 && arg2)) {
//     return true;
//   } else {
//     return false;
//   }
// }
