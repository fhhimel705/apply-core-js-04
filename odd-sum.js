let numbers = [11, 12, 13, 14, 15, 16, 17];
let sum = 0;

function oddSum(numbers) {
  for (i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 == 0) {
      continue;
    } else if (number % 2 !== 0) {
      sum = sum + number;
      console.log(number, sum);
      
    }
  }
  
}
oddSum(numbers);
