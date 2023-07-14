// Double Doubles

// even length and same sides on both sides
// if the length is even and current index is similar to next index return same
// other wise mulity the num by two


function twice(num) {
  num = String(num);
  let firstHalf = num.slice(0, num.length / 2);
  let secondHalf = num.slice(num.length / 2);

  return firstHalf === secondHalf ? Number(num) : Number(num * 2);
}

console.log(twice(7676));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(103103));