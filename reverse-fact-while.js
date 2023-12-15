function factorial(number) {
  let multi = 1;
  let i = number;
  while (i >= 1) {
    console.log(i);
    multi = multi * i;
    i--;
  }
  return multi;
}
console.log(factorial(9));
