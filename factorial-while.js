

function factorial(number) {
  let i = 1;
  let multi = 1;
  while (i <= number) {
    
    multi = multi * i;
    i++;
  }
  return multi;
}
console.log(factorial(7));
