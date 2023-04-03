// Functions allow us to write reusable, modular code.
// We define a chunk of code that we can use at a later point.
// We use them all the time.

// Two step process
// Defining a function
function func() {
    console.log("Hello");
    console.log("This is from inside the function");
    console.log("Bye");
}

// Calling/Running a function
func(); // So this can be called any time wherever required
func();
func();

// Defining functions with parameters and calling them with arguements

function func1(message) {
    console.log(message.toUpperCase());
}

func1('hello');

// Defining funtions with multiple arguements.

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('abc', 5);

// return usage in function
// return stops the flow of function execution, no line after the return statement run.
// Also note that we can return one and only one value using return in a function.

// example:

function sumNumbers(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

let sum = sumNumbers(2, 3);
console.log(sum);

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

console.log(lastElement([1, 2, 3]));


// Scope of nested functions
console.log("Nested function scopes");

function bankRobbery() {
    const heros = ['Hulk', 'Iron Man', 'Captain America', 'Thor'];

    function cryForHelp() {
        let color = 'green';

        function inner() {
            for (hero of heros) {
                console.log(`Please help us ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}

bankRobbery();

// So we can see that array heros is accessible in the inner most nested function as well. but vice verse is not
// true
// That means color variable will be available inside inner() but not in bankRobbery().

// Note : key var used to defining the variable has separate way of defining the scope. variable defined with 
// var can be used after that as well.



// Function Expressions
console.log("Funtion Expressions");
const add = function(x, y) {
    return x + y;
}

add(2, 3);
// So we can note that instead of giving the name of the function over here, we have assigned the entire the 
// function to variable add and the right side of the = sign is called as function expression.
// but the way of calling here is same.

// In javascript, functions are treated as any other things like variables, arrays, etc. we can save functions
// into variable as we have seen above example. We can pass the entire function as arguement, we can return
// function using the return statement as well.



// Higher Order Functions
console.log("Higher Order Function");
// These are the function that operate on/with other function. 
// They accept other functions as arguements
// They return other functions 

function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);
// So here we are passing function as an arguement to another function

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

callTenTimes(rollDie);


// Returning a Function
// So we can even return a function as well.
// consider below example:

function makeFunc() {
    const rand = Math.floor(Math.random() * 10) + 1;
    if (rand > 5) {
        return function() {
            console.log("You got better than 5..!");
        }
    } else {
        return function() {
            console.log("You got less than 5..!");
        }
    }
}

const whatYouGot = makeFunc();
whatYouGot();

// Let's consider another example where one function is going to create another function on the
// basis of arguement and than return that function

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

isbetween = makeBetweenFunc(1, 10);
// So this statement has created a function isBetween based on min and max value we have passed 
// and returned us a function which we have stored in isBetween.
console.log(isbetween(5));
console.log(isbetween(14));
// Now we can create as many functions as required:
isChild = makeBetweenFunc(0, 12);
isTeenager = makeBetweenFunc(13, 19);
isAdult = makeBetweenFunc(20, 60);
isSenior = makeBetweenFunc(61, 120);