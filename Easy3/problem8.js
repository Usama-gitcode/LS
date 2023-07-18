function replaceNonAlphabetic(str) {
  const alphabeticChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let index = 0; index < str.length; index++) {
    const char = str[index];

    if (alphabeticChars.includes(char)) {
      result += char;
    } else {
      result += " ";
    }
  }

  return result.replace(/\s+/g, " ");
}

console.log(replaceNonAlphabetic("---what's my +*& line?"));
