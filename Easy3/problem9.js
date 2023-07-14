function century(year) {
  const century = Math.ceil(year / 100);
  const suffix = getCenturySuffix(century);
  return century + suffix;
}

function getCenturySuffix(century) {
  if (century >= 11 && century <= 13) {
    return 'th';
  }

  const lastDigit = century % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"