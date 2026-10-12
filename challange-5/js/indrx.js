var score1 = Number(window.prompt("Enter score of subject 1: "));
var score2 = Number(window.prompt("Enter score of subject 2: "));
var score3 = Number(window.prompt("Enter score of subject 3: "));
var avg = ((score1 + score2 + score3) / 3).toFixed(2);

if(avg <= 50) 
    console.log("Average: "+ avg +", Status: Pass");
else
    console.log("Average: "+ avg +", Status: Fail");