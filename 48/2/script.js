// Skriv en while loop
// Som varje iteration (repetition) slumpar ett heltal mellan 0 och 10
// Om talet blir 6, avsluta loopen


// Exempel på output:
// 4
// 7
// 3
// 8
// 4
// 1
// 1
// 6

let i = 0;
while(i != 6){
    i = Math.round(Math.random()*10);
    console.log(i);
}