var arr=["headphone","soap","vaccum cleaner"];
function additem(array)
{
    array.forEach((element)=>{
        console.log(element);
    });
    
}
arr.push("toothpaste");
additem(arr)