let years = [2023, 2024, 2025, 2028, 2030];

function leapYear(year) {
    let leapYearsArray = [];
  for (i = 0; i < year.length; i++) {
    if (year[i] % 4 === 0 && year[i] % 100 !== 0) {
      leapYearsArray.push(year[i]);
    }
     else {
      continue;
    }
  }
  return leapYearsArray;
}
console.log(leapYear(years));