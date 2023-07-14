// function stringy(num) {
//   let newString = "";

//   for (let index = 0; index < num; index++) {
//     let nums = index % 2 === 0 ? 1 : 0;
//     newString += nums;
//   }
//   return newString;
// }

function stringy(num) {
  let result = "";

  for (let index = 0; index < num; index++) {
    if (index % 2 === 0) {
      result += "1";
    } else {
      result += "0";
    }
  }

  return result;
}

console.log(stringy(6));
