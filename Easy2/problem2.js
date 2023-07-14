const readline = require("readline-sync");

console.log("What is your name?");
let userinput = readline.question();

if (userinput.includes("!")) {
  userinput = userinput.slice(0, -1);
  console.log(`HELLO ${userinput.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userinput}`);
}
