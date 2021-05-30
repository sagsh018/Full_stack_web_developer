// filter Method
// =============

// This basically takes in a function as a parameter and apply that function on every element of an array and if the
// result evaluates to true than add it to new array.
// at the end return that new array created.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 27];

let newNums = num.filter((n) => n < 11);
console.log(newNums);

let evenNums = num.filter(n => n % 2 === 0);
console.log(evenNums);

// Another example

const movies = [{
        'name': 'conjuring',
        'rating': 98,
        'year': 2012
    },
    {
        'name': 'Anabell home return',
        'rating': 68,
        'year': 2019
    },
    {
        'name': 'Civil war',
        'rating': 93,
        'year': 2014
    },
    {
        'name': 'Ant-Man',
        'rating': 89,
        'year': 2018
    }
]

const goodMoviesTitles = movies.filter(movie => movie.rating > 90).map(movie => movie.name);
const badMoviesTitles = movies.filter(movie => movie.rating < 90).map(movie => movie.name);

console.log(goodMoviesTitles);
console.log(badMoviesTitles);

function validUserNames(usernames) {
    const lesser = usernames.filter(name => name.lenght < 10);
    return lesser;
}

console.log(validUserNames(['abcdefghijkl', 'abcsdf', '123456789', 'sagarsharma']));


// some & every methods on array
// ==============================

// when every is called on an array, it applies the callback function passed in it as parameter and if every check returns
// truem then it return true, otherwise false.
// wherease, if any one of the check evaluates to true, then some return ture otherwise false.

const numbersFor = [80, 90, 85, 95, 89, 99, 100];

console.log(numbersFor.every(num => num > 75)); // true
console.log(numbersFor.every(num => num > 85)); // false.

const movies3 = [{
        'name': 'The Avengers',
        'year': 2007
    },
    {
        'name': 'Civil war',
        'year': 2012
    },
    {
        'name': 'Dr. Strange',
        'year': 2016
    },
    {
        'name': 'Avangers: Infinity war',
        'year': 2017
    },
    {
        'name': 'Avengers: End Game',
        'year': 2019
    }
]

console.log(movies3.some(movie => movie.year > 2015));