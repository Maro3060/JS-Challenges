var age = Number(window.prompt("how old are you?"));
var hasTicket = window.prompt("are you have a ticket?[yes / no]")

if(age >= 18 || hasTicket.toLowerCase() == 'yes')
{
    console.log("Access granted: true")
}
else if(age < 18 || hasTicket.toLowerCase() == 'yes')
{
    console.log("Access granted: false")
}
else if(age >= 18 || hasTicket.toLowerCase() == 'no')
{
    console.log("Access granted: false")
}
else if(age > 18 || hasTicket.toLowerCase() == 'no')
{
    console.log("Access granted: false")
}