function triangle(height) {
  let spaces = height - 1;
  let stars = 1;

  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

triangle(5);

// function triangle(n) {
//   for (let index = 1; index <= n; index++) {
//     let row = '';

//     for (let j = 1; j <= n; j++) {
//       if (j <= n - index) {
//         row += ' ';
//       } else {
//         row += '*';
//       }
//     }

//     console.log(row);
//   }
// }

// triangle(5);
