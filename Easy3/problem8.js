function replaceNonAlphabetic(str) {
  const alphabeticChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let previousCharIsAlphabetic = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (alphabeticChars.includes(char)) {
      result += char;
      previousCharIsAlphabetic = true;
    } else {
      if (previousCharIsAlphabetic) {
        result += " ";
        previousCharIsAlphabetic = false;
      }
    }
  }

  return result;
}

console.log(replaceNonAlphabetic("---what's my +*& line?"));
