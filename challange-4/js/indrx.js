var hour = Number(window.prompt("Enter the time: "));

if(hour <= 23) {
    if(hour <= 11)
        console.log("Good morning!")
    else if(huor <= 17)
        console.log("Good afternoon!");
    else if(hour <= 23)
        console.log("Good evening!")
} else {
    console.log("invalid hour!");
}
