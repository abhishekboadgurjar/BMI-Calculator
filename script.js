const btnE1 = document.getElementById("btn");
const resultE1 = document.getElementById("bmi-result");
const weightConditionE1 = document.getElementById("weight-condition");
const heightE1 = document.getElementById("height");
const weightE1 = document.getElementById("weight");

function calculateBMI() {
    const height = heightE1.value / 100;
    const weight = weightE1.value;
    const bmiValue = weight / (height * height);

    resultE1.value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionE1.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionE1.innerText = "Normal Weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionE1.innerText = "Over Weight";
    } else if (bmiValue > 30) {
        weightConditionE1.innerText = "Obesity";
    }
}

btnE1.addEventListener("click", calculateBMI);