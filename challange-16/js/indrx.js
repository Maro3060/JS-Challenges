var amount =  Number(window.prompt("Enter Amount: "));
var tax = amount * 0.10;
var total = amount + tax;

if(amount > 100) {
    var discount = (amount * 0.5) / 10;
    console.log(`Subtotal: $${amount}, Tax: $${tax}, Discount: $${discount}, Final: $${total - discount}`);
}
else {
    console.log(`Subtotal: $${amount}, Tax: $${tax}, Discount: $0, Final: $${total}`);
}