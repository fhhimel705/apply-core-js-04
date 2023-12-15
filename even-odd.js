let num01 = 98;
let num02 = 117;

function evenOdd(number){
    if(number % 2 == 0){
       return true;
    }
    else if (number % 2 == 1){
        return false;
    }
}

console.log(evenOdd(num01));
console.log(evenOdd(num02));