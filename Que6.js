function removeltem(arr, index){
    const newArray = [];
    for (let i=0;i<arr.length;i++) {
        if (i==index) {
            continue;
        }
        newArray.push(arr[i]);
    }
    return newArray;
}
const originalArray = [1,2,3,4,5];
const indexToRemove = 2;
const result = removeltem(originalArray,indexToRemove);
console.log(result); 