let num = [11, 12, 13, 14, 15, 16, 17];
for (i=0; i<num.length; i++){
    // console.log(i,num[i]);
}

let sum = 0;
for (i=0; i<num.length; i++){
    sum = sum + num[i];
    // console.log(num[i], sum);
}

let sum_01 = 0;
for(i=0; i<num.length; i++){
    if(num[i] % 2 == 0){
        continue;
    }
    else if(num[i] % 2 !== 0){
        sum_01 = sum_01 + num[i];
        console.log(sum_01, num[i]);
    }
}