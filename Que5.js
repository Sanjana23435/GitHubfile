function sumOfEven(n){
    let sum = 0;
    for (let i=0; i<= n;i++){
        if (i%2== 0){
            sum =sum+ i;
        }
    }
    return sum;
}
console.log(sumOfEven(51));  