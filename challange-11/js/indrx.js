var a = Number(window.prompt("Enter first Number: "));
var b = Number(window.prompt("Enter second Number: "));
var temp;

temp = a;
a = b;
b = temp;

console.log("After Swapping: num1= " + a + ", num2= " + b);