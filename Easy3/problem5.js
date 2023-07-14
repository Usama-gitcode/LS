let readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter a adjective: ');
let adverb = readline.question('Enter a adverb: ');

console.log(`
Welcome to madlibs.
You are a ${adjective} ${noun}.
As a ${noun}, you ${adverb} ${verb} all your enemies from the game.
Oh you stunning ${noun}, you
`);