let multi = 1;

function factorial(number) {
  for (i = 1; i <= number; i++) {
    multi = multi * i;
    
  }
  return multi;
}

console.log(factorial(9));