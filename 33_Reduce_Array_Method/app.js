// Reduce Method : Executes a reducer method on every element of an array, resulting in a single value.
// Example of summing up and array
// [3, 5, 7, 9, 11].reduce((accumulator, currentValue ) => {
//     return accumulator + currentValue;
// })
// callback         accumulator     currentValue        return Value
// ==================================================================
// first call       3               5                   8
// second call      8               7                   15
// third call       15              9                   24
// fourth call      24              11                  35
// So basically during the first call, accumulator will be 3(first array element) and currentValue will be 5(second
// array element), then return value will be sum of both. For second call, return value will become accumulator and current
// value will be third value of array.

// Now let's consider another example where accumulator will be something else instead of first array element.

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
const total = prices.reduce((total, price) => {
    return total + price;
})
console.log(total);

// In above example total is accumulator and a kind of starting point.

// We could also use implicit return in above example :

const totalWithImplicitReturn = prices.reduce((total, price) => total + price);
console.log(totalWithImplicitReturn);

// We could also do a multiply reduce as below :

const productWithImplicitReturn = prices.reduce((total, price) => total * price);
console.log(productWithImplicitReturn);

// Now we could also do more useful stuff using reduce method and that will be finding minimum and maximum in an
// array. So lets take prices array above and find minimum price and maximum price in that array using reduce method.

const minimum = prices.reduce((min, price) => {
    if(price < min) {
        return price;
    } else {
        return min;
    }
})

console.log(minimum);

const maximum = prices.reduce((max, price) => {
    if(price > max) {
        return price;
    } else {
        return max;
    }
})

console.log(maximum);

// Now let's consider back our old example of movies and find out the highest rated movie

const movies = [
    {
        'name': 'The Avengers',
        'year': 2007,
        'rating': 6
    },
    {
        'name': 'Civil war',
        'year': 2012,
        'rating': 8
    },
    {
        'name': 'Dr. Strange',
        'year': 2016,
        'rating': 8
    },
    {
        'name': 'Avengers: Infinity war',
        'year': 2017,
        'rating': 7
    },
    {
        'name': 'Avengers: End Game',
        'year': 2019,
        'rating': 9
    }
]

const highestRatedMovie = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.rating > bestMovie.rating) {
        return currMovie;
    } else {
        return bestMovie;
    }
})

console.log(highestRatedMovie);

// Last thing about this reduce method is that we can also pass in initial value for accumulator to mark the starting point.
// Consider the example array of numbers again :

const numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((sum, num) => sum + num)
console.log(sum);  // This will print 150 after summing all values. Here starting point is marked 0, i.e. sum = 0
// Suppose if we want to have different starting point. We could do this by passing in second argument along with callback
// function in reduce method
let sumWithStartingPoint = numbers.reduce((sum, num) => sum + num, 100);
console.log(sumWithStartingPoint); // This will print 250 by adding 100 as a starting point.