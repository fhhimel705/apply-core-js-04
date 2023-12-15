let multi = 1;

function reverseMulti(number){
    for(i=number; i>0; i--){
        multi = multi * i;
        console.log(i);
    }
    return multi;
}

console.log(reverseMulti(9));