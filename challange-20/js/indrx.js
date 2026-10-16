var n = Number(window.prompt("Enter Number of stars: "));

for (var i = 0; i < n; i++) {
    for (var j = 0; j < 1 * (n - i - 1); j++){
        console.log(" ");
    }
    for (var k = 0; k <= i; k++) {
        console.log("*");
    }
    console.log("\n");
}