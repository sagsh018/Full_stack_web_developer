// Defualt parameters in JavaScript
//=================================

// We can pass the default parameter to to functions in JavaScript, so that if users does not pass that arguement while calling that function, the default 
// value will be used

// Consider the example using default parameter passed in :

function multiply(a, b = 1){
    console.log(a*b);
}

// See how we have passed parameter b value as 1, this is a default value of b that it will use if no second arguement is passed while calling multiply.
// See below example calls:

multiply(2,3); // Here we have passed both the arguements.

multiply(5); // Here, we haven't passed the second arguement and it resulted into usage of default value 1 and answer is 5*1 = 5.

// Lets consider another example :

function rollDie(numSide=6){
    console.log(Math.floor(Math.random() * 6) + 1);
}

rollDie(); // Without passing any arguement, function takes default parameter
rollDie(7); // Here function will take passed arguememnt.

// Now, one thing to note about while using default parameters is their order. Consider below example :

function greet(msg="Hey There", person){
    console.log(`${msg}, ${person}!`);
}

greet("Hello", "Sagar"); // So this is simple, where we are passing arguements while calling function.

greet("Sagar"); // Notice here we have passed in only one arguement, which is the person name as we want to use default parameter for msg. However, the 
// result of above statment given : Sagar, undefined! instead of "Hey there, Sagar".

// The reason behind this is, JavaScript could not understand that the parameter that you have passed, "Sagar" in above case is for second parameter, cannot be
// used as a value for first parameter. So here JavaScript has used the passed arguement as a value for first parameter "msg" and made second parameter "person"
// as undefined, thats why we got "Sagar, undefined".

// For above problem, you have to always keep in ming, always use default paramters, after the ones for which you are not passing any default parameter.
// Basically we can also say that it is always better to use default paramter at the end.

function greetAgain(person, msg="Hey there"){
    console.log(`${msg}, ${person}!`);
}

greetAgain("Sagar"); // This time it will not throw undefined. outout will be "Hey there, Sagar!"



// Spreads in function calls
//===========================

// Spread syntax allows as iterable such as an array to be expanded in places where zero or more arguements (for function calls)
// or elements (for array literals) are expected, or object expression to be expended in places where zero or more key-value pairs (for object literals)
// are expected.

// Let's consider the first example of expanding an iterable (array or string ) into a list of arguements for a function call :

Math.max(2,55,67,4567,434)
// Output : 4567
Math.min(45345, 44, 566, 88484, 45,5,4,57867);
// Output : 4 

// So in above example we are looking at the Math functions that takes multiple arguements to find out the max and min.

// Now suppose I have an iterable array of above numbers :

const nums = [2,55,67,4567,434];

// Suppose if I have to find out the max from above array using Math.max() function, we will get NaN as below :

console.log(Math.max(nums));
//NaN

// Now the reason behind this behavior is that Math.max and Math.min are expecting separate numbers and we have just passed entire array of numbers as a single
// arguement and this function doesn't know what to do with them.

// This is where spread syntax will be become useful, where we will not just pass an array as single arguement, but we will spread it in individual arguements
// as below :

console.log(Math.max(...nums));
// 4567

// Please note, we are not modifying the actual array. Array will remain intact as it is. But we are just spreading it while passing as an arguement to
// a function.

// Same can be done for Math.min() as well :

console.log(Math.min(...nums));
// 2

// Now, let's consider another example :

console.log("asd", "as", "dfdf", "erwerw");
// asd as dfdf erwerw ==> This is how it will be printed.

// Suppose we have array of above strings :

const arrStrings = ["asd", "as", "dfdf", "erwerw"];
console.log(...arrStrings);
// asd as dfdf erwerw ==> Also prints the same strings with spaces between them. So this is where spreading comes handy.

// Similarly we can also print all the numbers of array nums saperately as below :

console.log(...nums);
// 2 55 67 4567 434

// Please note, we can use spread on any iterable where we can iterate using for..of loop. Please consider below examples :

// Strings :

console.log(..."Hello");
// H e l l o ==> So this has spreaded all the elements of above string "Hello" and printing them.




// Spread with Array Literals
//============================

// So in this section we will see how we can spread the elements inside an array literals :

// Consider below arrays :

const nums1 = [1,2,3];
const nums2 = [4,5,6];

// Below we will see how we can create new arrays using above existing arrays and spread the elements from one array into a new array :

console.log([ ...nums1, ...nums2 ]);
// So we have created new array by passing above arrays as spreaded arguements :
// [1, 2, 3, 4, 5, 6]

console.log(['a', 'b', ...nums1, ...nums2]);
// ['a', 'b', 1, 2, 3, 4, 5, 6]
// Here we have also added towo new elements in array along with above array elements as spread.

console.log([ ...nums1, ...nums2, 8,9,10]);
// [1, 2, 3, 4, 5, 6, 8, 9, 10] ==> added some numbers at the end.

// Note that we can also spread other iterables such as strings inside an array literal as below :

console.log([..."Hello"]);
// This will create a new array having all individual elements of string "Hello"
// ['H', 'e', 'l', 'l', 'o']



// Spreads in Object Literals
// ===========================

// Let's consider below example of copying the properties from one object literal and spreading it into another object literal :

const feline = {
    "legs": 4,
    "family": "Felidae"
};

const canine = {
    "family": 'Caninea',
    "furry": true
};

// Below is new object literals with above object literals properties spreaded :

const dog = {
    ...canine,
    "isPet": true
};

console.log(dog);
// {family: 'Caninea', furry: true, isPet: true}
// So we can see how we have spreaded the properties of one object literal into another.

const lion = {
    ...feline,
    "genus": "Penthera"
};
console.log(lion);
// {legs: 4, family: 'Felidae', genus: 'Penthera'}

const catDog = {
    ...canine,
    ...feline
};
console.log(catDog);
// {family: 'Felidae', furry: true, legs: 4}
// Consider in above example, both the object literals canine and feline have property named "family". However, in such conflict cases, the one that comes last 
// will override previous value. Since in above catDog object literal, we have written feline after canine, it has overidden the family value of "Caninea"
// with "Felidae". Therefore, in such cases order matters.

// Now, suppose if we want to spread an array inside the object literals like below :

console.log({
    ...[1,2,3,4,5]
});
// {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
// So when we try to spread an array inside object literals, the indeces of that array elements become key of the Key:value pairs of that object as above.

// Similary, if we try to spread a string inside an object literal, the indeces of string elements will become the key of properties inside object literal as 
// below :

console.log({
    ..."Hello"
});
// {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

// Please note, we use spread syntax in case of object literals mainly for making copy of object literals when use libraries of frameworks such as REACT.

// Another example that we can consider of using spreads inside object literals is to get some data from a form filled by user let say and making some addons
// to that before uploading it to our database. Please consider below example :

const dataFromForm = {
    "email": "abc@xyz.com",
    "name": "Sagar",
    "phone": 12312321342
};

// Now, suppose I have to add some additional information before storing this form data to database such as adding unique ID to this :

const modifiedFormData = {
    ...dataFromForm,
    "id": 1234
};
console.log(modifiedFormData);
// {email: 'abc@xyz.com', name: 'Sagar', phone: 12312321342, id: 1234}


// Rest Params
// ============

// REST looks like spread and also uses three dots (like :- ...param), but it is different.

// Consider the below example :

// The arguement object
// ====================
function sumAll() {
    let total = 0;
    for (let i=0; i<=arguments.length; i++){
        total = total + arguments[i];
    }
    return total;
}

console.log(sumAll(6,5,7));

// So we have seen arguements object above which is available inside every function by default.
// It looks like an array like object and,
    // Has a length property just like array. See the above example where we have used the length property
    // However, it doesn't have other array methods like push/pop.
// It by default contain all the arguements that you pass while calling the function. Like we have passed : 6,5,7 while calling sumAll() function above in
// console.log statement and all these are contained by arguements object available inside tis function by default.

// NOTE : This arguement object does not exist inside an arrow function.

// Lets consider another example to do a sum of passed arguements using a reduce array method

/*
function sumByReduce() {
    const total = arguments.reduce((total, el) => total + el)
    return total;
}

console.log(sumByReduce(3,4,5));
*/

// The above console.log will throw an error :

// Uncaught TypeError: arguments.reduce is not a function
//     at sumByReduce (app.js:265:29)
//     at app.js:269:13

// This is because like any other array object, arguements object does not have reduce method available.

// So this is where REST parameters comes in.
// REST Parameters collect all remaining arguements into an actual array.
// consider below example :

function sumAllRestParams(...nums){
    console.log(nums) // This will show that nums is an actual array made by rest syntax
    return nums.reduce((total, el) => total + el)
}

console.log(sumAllRestParams(5,6,7));

// So in above example, we are able to apply reduce method on nums, because using rest parameter syntax, we have collected all the arguements passed and 
// created an actual array. This is how we can make use of rest parameters.

// We can also pass in specific parameters along with the rest parameters. Please see the example below :

function raceResults(gold, silver, ...others){
    console.log(`Gold for : ${gold}`);
    console.log(`Solver for : ${silver}`);
    console.log(`Thank you for your time : ${others}`);
}

console.log(raceResults("India", "India", "Australia", "Kenya"));

// So were able to pass the specific arguements above and along with that every other arguements were collected and placed inside an array "others".

