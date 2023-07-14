function strings(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else string2.length > string1;
  return string1 + string2 + string1;
}
let Newstrings = strings("", "xyz");

console.log(Newstrings);
