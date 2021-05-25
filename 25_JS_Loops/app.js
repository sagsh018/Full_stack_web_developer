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