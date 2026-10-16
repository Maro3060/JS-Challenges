var process = Number(window.prompt("1:Balance\n2:Withdraw\n3:Deposit"));
var amount = Number(window.prompt("Enter Amount:"));
var currentBalance = Number(window.prompt("Enter your cuurent balance:"));

switch (process) {
    case 1:
        console.log(`Your balance is: $${currentBalance}`);
        break;

    case 2:
        console.log(`Withdrew $${amount}. New balance: $${currentBalance - amount}`);
        break;

    case 3:
        console.log(`Deposited $${amount}. New balance: $${currentBalance + amount}`);
        break;

    default:
        console.log("Invalid operation")
        break;
}