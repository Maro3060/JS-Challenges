var weight =  Number(window.prompt("Enter your weight (kg): "));
var height =  Number(window.prompt("Enter your height (m): "));
var BMi = weight / height**2;
var fixedBMi = BMi.toFixed(2);

if(BMi < 18.5) {
    console.log(`BMI: ${fixedBMi} - Underweight`)
}
else if(BMi >= 18.5 && BMi <= 24.9) {
    console.log(`BMI: ${fixedBMi} - Normal weight`)
}
else if(BMi >= 25 && BMi <= 29.9) {
    console.log(`BMI: ${fixedBMi} - Overweight`)
}
else {
    console.log(`BMI: ${fixedBMi} - Obese`);
}