// try/catch in javascript is to basically catch the errors which we might have dought on, that they might result in an error
// while running.
// for that we can wrap up that part of the code in a try/catch block
// consider below example:

try {
    console.log(hello.toUpperCase());
} catch {
    console.log("ERROR!!!!");
}
console.log("Even after the error above, our program doesn;t broke and this after line is executed.")

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("This is not a string message");
    }
}

console.log(yell());