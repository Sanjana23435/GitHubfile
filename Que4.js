function sumOfOdd(n){
    let sum = 0;
    for (let i=1; i<= n;i++){
        if (i%2== 0){
            sum =sum+ i;
        }
    }
    return sum;
}
console.log(sumOfOdd(51));  

