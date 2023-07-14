function stringToInteger(str) {
  let num = 0;
  let n = str.length;
  for (let i = 0; i < n; i += 1) {
    num = num * 10 + (str.charCodeAt(i) - 48);
  }
  return num;
}

function stringToSignedInteger(str) {
  if (str[0] === "+") {
    return stringToInteger(str.substring(1));
  } else if (str[0] === "-") {
    return -1 * stringToInteger(str.substring(1));
  }
  return stringToInteger(str);
}

console.log(stringToSignedInteger("4321") === 4321);
// logs true
console.log(stringToSignedInteger("-570") === -570);
// logs true
console.log(stringToSignedInteger("+100") === 100);
// logs true
console.log(stringToSignedInteger("-570") === 570);
// logs false
console.log(stringToSignedInteger("570") === -570);
// logs false
