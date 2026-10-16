var num1 = Number(window.prompt("Enter first number: "));
var num2 = Number(window.prompt("Enter second number: "));
var num3 = Number(window.prompt("Enter third number: "));

if(num1 >= num2 && num1 >= num3)
    console.log("Largest number is: " + num1);
else if(num2 >= num1 && num2 >= num3)
    console.log("largest number is: " + num2);
else
    console.log("largest number is: " + num3);