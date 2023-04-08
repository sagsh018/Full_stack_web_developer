const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 27];

// const isEven = num.filter(function (n) {
//     return n %2 === 0;
// })
//
// console.log(isEven);
//
// const isOdd = num.filter(n => {
//     return n % 2 !== 0;
// })
//

// const isOdd = num.filter(n => n % 2 !== 0);
//
// console.log(isOdd);

const movies = [
    {
        'name': 'conjuring',
        'rating': 98,
        'year': 2012
    },
    {
        'name': 'Annabell home return',
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

const movieNameOnly = movies
    .filter(m => m.rating > 90)
    .map(m => m.name);
console.log(movieNameOnly);