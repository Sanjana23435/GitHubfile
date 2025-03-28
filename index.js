let source=document.getElementById("display");
let counterValue=0;
source.textContent=0;
function increment()
{
    counterValue++;
    source.textContent=counterValue;
}
function reset()
{
    counterValue=0;
    source.textContent=counterValue;
}
function decrease()
{
if(counterValue<0)
{
    counterValue--;
}
    source.textContent=counterValue;
}

