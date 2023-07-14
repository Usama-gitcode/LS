function getGrade(grade1, grade2, grade3) {
  let meanAvg = (grade1 + grade2 + grade3) / 3;

  if (meanAvg >= 90 && meanAvg <= 100) {
    return "A";
  } else if (meanAvg >= 80 && meanAvg < 90) {
    return "B";
  } else if (meanAvg >= 70 && meanAvg < 80) {
    return "C";
  } else if (meanAvg >= 60 && meanAvg < 70) {
    return "D";
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 93));
