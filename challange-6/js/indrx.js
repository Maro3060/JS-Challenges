var num1 = Number(window.prompt("Enter first number: "));
var num2 = Number(window.prompt("Enter second number: "));
var op = window.prompt("Enter your operator: ");
var result = 0;

switch(op) {
    case '+':
        result = num1 + num2;
        break;
    
    case '-':
        result = num1 - num2;
        break;
    
    case '*':
        result = num1 * num2;
        break;    
    
    case '/':
        result = (num1 / num2).toFixed(2);
        break;
    
    default:
        console.log("invalid operator");
}

console.log("Result = " + result);
