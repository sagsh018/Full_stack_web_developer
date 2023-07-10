// Destructuring 

// A short, clean syntax to 'unpack' :

    // Values from an array
    // Properties from an object

// into distinct variables.

// Lets first consider destructuring the elements of an array. Please consider an example below :

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [ gold, silver, bronze ] = raceResults;

console.log(gold);

console.log(silver);

console.log(bronze);

// Output :

/*
Eliud Kipchoge
app.js:18 Feyisa Lelisa
app.js:20 Galen Rupp
*/

// So we can see that we are able to destructure an arracy by extracting the elements out of it and assigning them to new string variables like gold, silver
// and bronze.

// Lets consider another example :

const [fastest, ...everyoneElse] = raceResults;

console.log(fastest); // This will have very first value of array raceResults. Eliud Kipchoge

console.log(everyoneElse); // This has collected all the remaining elements and created an array with them. Bascially this is also REST params can be used.
                            // ['Feyisa Lelisa', 'Galen Rupp']

// Note : While destructuring, we have to use square brackets to show JavaScript that we want to destructure.

// We could also do the same destructure using our basic technique as well. Please see the example below :

const gold1 = raceResults[0];
const silver1 = raceResults[1];

// However, above way is not a shorthand way to writing. Therefore, Destructuring is introduced.



// Now lets consider destructuring elements from an object

// Consider the below object literal :

const user = {
    email: "ss0315345@gmail.com",
    password: "Welcome",
    firstName: "Sagar",
    lastName: "Sharma",
    born: 1992
}

// Now suppose, I want to single out / extract some values to pass it to the piece of code or let say a form. By using know method, we will do as below :

// const email = user.email;
// const firstName = user.firstName;

// Now, observe that by using this technique, we have write statement evertime to extract the value. Therefore, we will use destructuring of above object literal
// properties like below :

const {email, firstName} = user;

console.log(email);
console.log(firstName);

// So we are able to extract the properties and their values from object literal using destructuring small syntax. Note, in case of object literal, we don't 
// have to take care of order of properties, we can write them in any order :

// example :

// const {firstName, email} = user;

// but when destructuring an array, we have to take care of order of elements we are writing.

// Now, as we can see that using destructuring above, we have extracted the properties and its values from object literal and assign them to new variables 
// For example, we have destructured email, firstName above and assigned them to new variables called email and firstName.

// Suppose we also want to change the variable names while destructuring, so that their name is different than that of variables they are assigned to. Please
// consider below example :

const { born: birthYear } = user;
// console.log(born)// This will throw error as have not created any variable while destructuring with name born. Instead we have assigned born property value to 
// new variable named birthYear
console.log(birthYear);


// Now, let see how we can make use of default value, when variable that is not present is used while destructuring. See the below example :

// const {address} = user;
//console.log(address); // This will throw undefined. The reasong is because there is no property named address inside object literal user. Therefore, we can
// give some default value of it as below :

const {address = "N/A"} = user;

console.log(address); // Now this will not say undefined, because even though address is not present above, we have assigned it a default value.

// However, if we try to assign default value to property which exist in object literal while destructuring, its default value is ignored and value from
// object literal is used. Please see the below example :

const {lastName: surname = "sharmaji"} = user;
console.log(surname); // output of this is still "Sharma" and not sharmaji. This shows that destructuring took the value from above defined object literal and
// not from default value mentioned.


// Last thing we consider here is to destructuring function parameter list. So when we are writing / defining those functions and writing parameters in between 
// those paranthesis, we can destructure the values that are being passed in.

// Please note, destructuring function parameters are mostly used with object literals. Please consider an example below :

// So lets consider our user object below and create a function which will create a full name :

const userDetails = {
    firstName: "Sagar",
    lastName: "Sharma"
}

function fullName(userDetails) {
    console.log(`${userDetails.firstName} ${userDetails.lastName}`);
}

fullName(userDetails);
// Output : Sagar Sharma

// So from above example we can see that we are just passing object literal "user" to function "fullName" and inside that function we are creating a full name 
// using template literal.

// Now, instead of writing like above in function we can destructure the object literal that we passed in above function as below :

function destructureInsideFullName(userDetails) {
    const {firstName, lastName} = userDetails;
    console.log(`${firstName} ${lastName}`);
}

destructureInsideFullName(user);

// Output : Sagar Sharma

// So we can see that above we have destructured the object "userDetails" inside the function definition. It is an improvement, however we can still make
// more improvements by destructuring the object while passing it inside the function parameters. See the example below :

function destructureInsideFullNameParams({firstName, lastName = "myname"}) { // Object how we have also passed default value here.
    console.log(`${firstName} ${lastName}`);
}

destructureInsideFullNameParams(userDetails);

// Output : Sagar Sharma

// So we can see that instead of passing entire object literal as function paramter, we have just passed firstName and lastName inside it by destructuring them
// while creating parameters of function.

// Now, we can also use above destructuring in array methods. Consider below movie object literal :

const movies = [
    {
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

// Now suppose we want to filter the movies based on rating as below :

const goodMovies = movies.filter((movie) => movie.rating > 90)

console.log(goodMovies);
// Output :
// 0: {name: 'conjuring', rating: 98, year: 2012}
// 1: {name: 'Civil war', rating: 93, year: 2014}

// Suppose we don't want entire movies object as we are just dealing with the score property, we can destructure the movies object and get only the score like
// below :

const goodMoviesDestructured = movies.filter(({rating}) => rating> 90);
console.log(goodMoviesDestructured);

// So we get the same output as above.
// 0: {name: 'conjuring', rating: 98, year: 2012}
// 1: {name: 'Civil war', rating: 93, year: 2014}

// So we have destructured on the fly.

// Lets consider another example with map array method. 

const mappedMovies = movies.map((movie) => {
    return `${movie.name} (${movie.year}) is rated ${movie.rating}`
})

console.log(mappedMovies);
// Output :
// ['conjuring (2012) is rated 98', 'Anabell home return (2019) is rated 68', 'Civil war (2014) is rated 93', 'Ant-Man (2018) is rated 89']

// So in above example we have mapped the movies array structure into a second array named : mappedMovies. Now, instead of passing movie object literals from
// array in above example, we can pass it by destructuring as below :

const mappedDestructuredMovies = movies.map(({name, rating, year}) => {
    return `${name} (${year}) is rated ${rating}`
})

console.log(mappedDestructuredMovies);

// So same output :
// ['conjuring (2012) is rated 98', 'Anabell home return (2019) is rated 68', 'Civil war (2014) is rated 93', 'Ant-Man (2018) is rated 89']
// and we didn't have to use "movie." everytime.