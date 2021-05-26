let maximum = parseInt(prompt("Enter the maximum number you want to go upto"));

while (!maximum) {
    maximum = parseInt(prompt("Invalid number, Try again"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let choice = prompt("Guess the number now or type 'q' to quit");
let guess = parseInt(choice);
let count = 1;
while (guess !== targetNumber && choice !== 'q') {
    count++;
    if (guess < targetNumber) {
        choice = prompt("Number is lower, kindly guess again");
        if (choice === 'q') break;
        guess = parseInt(choice);
    } else {
        choice = prompt("Number is higher, kindly guess again");
        if (choice === 'q') break;
        guess = parseInt(choice);
    }
}
if (choice === 'q') {
    console.log("Good bye")
} else {
    console.log(`You got the number ${guess} in ${count} guesses`);
}