var hours = Number(window.prompt("Enter number of hours: "));
var rate = Number(window.prompt("Enter your hourly rate: "));
var totalSalary = 0;
var regular = 0;
var overTimePay = 0;
var overTimeHours = 0;
var totalSalary = 0;

if(hours >= 40) {
    regular = rate * 40;
    overTimeHours = hours - 40;
    overTimePay = overTimeHours * (rate * 1.5);
    totalSalary = regular + overTimePay;
}
else {
    totalSalary = hours * rate;
    regular = rate * hours;
}

console.log(`Regular: $${regular}, Overtime: $${overTimePay}, Total: $${totalSalary}`);