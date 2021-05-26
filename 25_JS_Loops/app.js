// For Loops example
for (let i = 1; i <= 10; i++) {
    console.log("Hello World");
}

// for loop to print even number from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("==============================================");
// or we could also do in below way
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

console.log("==============================================");
// If we want even numbers starting from 2 to 20,

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
console.log("==============================================");
// for odd numbers.
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
console.log("==============================================");
// starting from 100 and decrementing all the way to 0
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}
console.log("==============================================");
// instead of just doing the increment and decrement we could also do multiplication and division as well in the third piece
// of the for loop.
for (let i = 1; i <= 1000; i *= 10) {
    console.log(i);
}

// Iterating over array using for loop:
const animal = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animal.length; i++) {
    console.log(i, animal[i]);
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`i is : ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`    j is : ${j}`);
    }
}

// Lets consider another example for iterating over an nested array using for loop.
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`Row # ${i + 1}`);
//     console.log(row[i]);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

for (let i = 0; i < seatingChart.length; i++) {
    console.log(`Row # ${i+1}`);
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(`   ${seatingChart[i][j]}`);
    }
}

// while Loop
// We make use of while loop whenever we don't know the stopping condition 
// below is example to demostrate whatever we could do with for loop can be done with while loop as well

let count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}
// So we are able to print numbers from 0 to 10 using while loop as well.
// but this not where while loop shines.

// main use of while loop

const SECRET = "Hippo";
let guess = prompt("Enter the SECRET");
while (guess !== SECRET) {
    guess = prompt("Enter the SECRET");
}
console.log("You got the SECRET")



// break keyword
console.log("Break Keyword");
// This is basically used for stopping the currently running loop and coming out of it without completing it.
// consider the below example:
let input = prompt("Say something");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        break;
    }
}
console.log("OK You Win..!");
// So we have used break statement to come out of while loop as soon as entered string become equal to required.

// Lets consider another example for for loop:
for (let i = 1; i <= 1000; i++) {
    console.log(i);
    if (i === 100) {
        break;
    }
}
// So in above loop its going to stop as soon as i become 100. and it will not run till 1000



// For...Of Loop
console.log("============For...Of Loop==============");
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

for (sub of subreddits) {
    console.log(`visit subredit/r/${sub}`);
}

// We can also iterate over nested arrays using for of loop very easily. Let's consider our seatingChart example

for (row of seatingChart) {
    for (student of row) {
        console.log(student);
    }
}


// How to iterate over the non iterable object literals
// consider below object literal
const testScores = {
    'keenan': 80,
    'damon': 67,
    'kim': 89,
    'shawn': 91,
    'marlon': 72,
    'dwayne': 77,
    'nadia': 83,
    'elvira': 97,
    'diedre': 81,
    'vonnie': 60
}

// So to iterate through this object literal, we could make use of special for loop called "for..in loop"

for (let person in testScores) {
    console.log(`${person} scored : ${testScores[person]}`);
}

// Now there are three special function of class Object which we can make use:
// Object.keys()
// Object.values()
// Object.entries()
// So we can even make use of these functions to extract the keys, values or entire key:value pair of object
total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}

console.log(total / scores.length);