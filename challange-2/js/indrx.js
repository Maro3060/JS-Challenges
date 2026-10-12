// Currency converter: get amount in EGP, convert to USD, EUR, GBP. 
// USD=47.22, EUR=54.35, GBP=61.95

var EGP = Number(window.prompt("Enter currency in EGP"));
var USD = 47.22;
var EUR = 54.35;
var GBP = 61.95;
var EGP_To_USD = (EGP / USD).toFixed(2);
var EGP_To_EUR = (EGP / EUR).toFixed(2);
var EGP_To_GPB = (EGP / GBP).toFixed(2);

console.log(EGP +" EGP = "+ EGP_To_USD +" USD,"+ EGP_To_EUR +" EUR," + EGP_To_GPB +" GBP");