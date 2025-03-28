const mass =document.querySelector("mass");
const height document.querySelector("height");
const button =document.querySelector(".bin");
const result =document.querySelector("#result");
let bmi;
let bmiResult;
button.addEventListener("click",()=> {
bmi =mass.value (height.value/100) **2;
result.textContent=bmi.toFixed(2);
bmiResult=bmi.toFixed(2);
if (bmiResult 18.5) {
let noteDiv document.createElement("h3");
let noteText document.createTextNode(`NOTE: Hey You are BMI is ${bmiResult} and comes under Underweight Category.`
    );
    noteDiv.appendChild(noteText);
document.body.appendChild(noteDiv);
noteDiv.style.color = "red";
noteDiv.style.textAlign="center";
}
else if (bmiResult >= 18.5 && bmi 24.9) {
let noteDiv document.createElement("h3");
let noteText document.createTextNode(`NOTE: Hey You are BMI is ${bmiResult} and comes under Healhty Category.`
    );
    noteDiv.appendChild(noteText);
document.body.appendChild(noteDiv);
noteDiv.style.color = "red";
noteDiv.style.textAlign="center";
}
else if (bmiResult >= 25 && bmiResult 29.9) {
let noteDiv document.createElement("h3");
let noteText document.createTextNode(`NOTE: Hey You are BMI is ${bmiResult} and comes under Overweight Category.`
    );
    noteDiv.appendChild(noteText);
document.body.appendChild(noteDiv);
noteDiv.style.color = "red";
noteDiv.style.textAlign="center";
}
else if (bmiResult >= 30) {
let noteDiv document.createElement("h3");
let noteText document.createTextNode(`NOTE: Hey You are BMI is ${bmiResult} and comes under Obesity Category.`
    );
    noteDiv.appendChild(noteText);
document.body.appendChild(noteDiv);
noteDiv.style.color = "red";
noteDiv.style.textAlign="center";
}
});