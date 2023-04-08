// forEach method
// ===============
// It is  basically an array method, that accept function as an argument and apply that function for
// each element in an array.

// consider the below array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function print(el) {
    console.log(el);
}

numbers.forEach(print);
// numbers.forEach(print);
// So basically as many times as we call forEach method on array number, it is going to apply function "print"
// on every element of an array.

// Now usually we write the function within the forEach method as below

numbers.forEach(function print1(el) {
    console.log(el);
});

// So this is more common.
// but notice just printing every element or such simple tasks can be done more efficiently using for..of loop
// better
for (let el of numbers) {
    console.log(el);
}

// Now let's try to print all even numbers in the above array using forEach method:

numbers.forEach(function even(el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})

// Now lets try another example having array of objects inside it

const movies = [{
        'name': 'Amedeus',
        'rating': 99
    },

    {
        'name': 'Stand by me',
        'rating': 85
    },

    {
        'name': 'Parasite',
        'rating': 95
    },

    {
        'name': 'Alien',
        'rating': 90
    }
]

movies.forEach(function(movie) {
    console.log(`${movie.name} - ${movie.rating}`);
})


// Map method 
// ==========
// So this basically takes every element of an array apply function to that, which is passed as arguement.
// and creates a new array and return it. This new array we can save in different array and use it.

// example

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = arr1.map(function(t) {
    return t ** 2;
});
console.log(arr2);

// Another example

const movies1 = [{
        'name': 'conjuring',
        'rating': 100
    },
    {
        'name': 'conjuring2',
        'rating': 98
    },
    {
        'name': 'Avengers',
        'rating': 90
    },
    {
        'name': 'Avengers Infinity war',
        'rating': 97
    },
    {
        'name': 'Avengers End Game',
        'rating': 100
    }
]

// Let's create another array with just list of movies and no rating

const justMovies = movies1.map(function(movie) {
    return movie.name;
})
console.log(justMovies);


// Arrow Functions
// =================
// These are basically syntactically compact alternative to a regular function expression
// example:

const add = (x, y) => {
    return x + y;
}

// notice here we have even removed he function keyword. Usually we make use of arrow function in places
// where we do not reuse the function name again and again. like in Map methd of arrays.

// example:

const square = (x) => {
    return x ** 2;
}

// example: Arrow function without arguements

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

// So even if we do not have arguements to pass, we still have to keep empty paranthesis.
// Note : If we have 0 or 2 and more than 2 arguements, then paranthesis are required. but if there is only
// arguement, then we can even pass it without paranthesis as well.


// Arrow Function Implicit Return
// ==============================

// consider the example of checking if the number even or not

// const isEven = function(num) {
//     return num % 2 === 0;
// }

// This one is a normal function
// lets reconstruct it

// const isEven = (num) => {
//     return num % 2 === 0;
// }

// So here we have made it a arrow function
// lets reconstruct it again

// const isEven = num => {
//     return num % 2 === 0;
// }

// here we have removed parenthesis.
// Let's reconstruct it again

// const isEven = num => (
//     num % 2 === 0
// );

// So here we have replaced curly braces with paranthesis and this will Javascript that we are just returning
// one thing and this will become implicit return arrow function

// we could even write it on single line as well:

// const isEven = num => ( num%2 === 0);
// We can even get rid of parenthesis if we are putting all the things in one line like above.

const isEven = num => num % 2 === 0;
console.log(isEven(3));
// So just in a single line we have created entire function.

// Let's convert our rolldie method in a arrow function

const rollDie2 = () => Math.floor(Math.random() * 6) + 1;

// Note :: We can only make use of implicit returns, if we have only one statement/expression in our function.
// it will not work if there are more than one. because we are just telling JS that there is only one thing and implicitly
// return that.

// Now let's try to use this implicit return arrow function with Map, where it actually shines.

const movies2 = [{
        'name': 'conjuring',
        'rating': 100
    },
    {
        'name': 'conjuring2',
        'rating': 98
    },
    {
        'name': 'Avengers',
        'rating': 90
    },
    {
        'name': 'Avengers Infinity war',
        'rating': 97
    },
    {
        'name': 'Avengers End Game',
        'rating': 100
    }
]

const newMovies = movies2.map(movie => movie.name);