// Data inside an JavaScript object is stored in a form of Key:value pair. This Key:Value pair is called property.
// So Object in JavaScript is a collection of properties.
// These key:value pairs data stores are referenced here as JavaScript Object literals.
// We make use of curly braces in order to create these object literals
// Another thing to note here is that Object literals are not ordered like array and here we make use of keys instead of index
// in order to access the elements of objects.
// Lets try to create a sample object literal as below

const kitchenSink = {
    favNum: 12345,
    isFunny: true,
    name: 'some',
    colors: ['red', 'orange']
}

// Note we can have all types of data inside an object literal. Here we have an integer, Boolean, string and an array of string.

console.log(kitchenSink);

// Note: The keys we defined in the object literals are all converted to strings, whether those are of any type like number,
// boolean or any other type as well.

const year = {
    1920: "Spanish Flew",
    2020: "Corona Virus"
}

// So even though we have used numbers as keys, they will be converted into string.

// Even if you keywords such as below for keys, they are also converted to string as well.

const dumbdumb = {
    true: "yes",
    null: "no"
}

// console.log(dumbdumb);
// {true: 'yes', null: 'no'}

// Let's see how to access the data inside an object literal.
console.log(kitchenSink.favNum);
// There is another way as well to access the data using keys
console.log(kitchenSink["name"]);
// This is similar to what we use to access the array elements. but we will not make use of this.

// another example:
console.log(year[2020]); // Notice here we are unable to make use of . to access the data as this is a integer value that 
// need to be converted to string first by javascript

// Another thing to note here is that when we make use of [] to access the object, we can even pass the entire expression
// inside this [] and that expression will be executed first and the based on value the element will be accessed.
let birth = 1992;
console.log(year[birth]);
// So first inside the [] bracket the value of birth variable is replaced with the year and then the value of that key will
// be extracted.
// So we make use of [] notiation when we want to get something evaluated inside the [].
// lets look at another example below:
const person = {
    firstName: 'Ramu',
    lastName: 'singh'
}
console.log(person['first' + 'Name']);
// So this will first work on inside the [] and concatinate the string. and after that the value corresponding to the key will
// be accessed.
// Note that this kind of accessing is not possible in case of . notation

// Exersise example.
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

console.log(restaurant['address'] + " " + restaurant.city + " " + restaurant.state + " " + restaurant.zipcode);


// Suppose we want to modify value of some element inside an object, then we can make use of same way to first reach
// to that key and then assign it different value.
// consider the beow example:

const midTerm = {
    'danielle': 80,
    'thomas': 90,
    'ezra': 50,
}

console.log(midTerm.danielle);
// suppose i want to modify the marks of ezra from 50 to 80
midTerm.ezra = 80;
console.log(midTerm);
// This will modify the marks to ezra.
// we can even add new key value pairs as well
midTerm.rahul = 90;
console.log(midTerm);
midTerm.thomas = 'A'; // So we can modify the value as well.
console.log(midTerm);
// Note here we have used " . " notation to access the element of object, but we can even use the square bracket as well.

// Note that even though an object literal is defined as constant, then also we can modify the values inside that object literal. 
// This is same concept as that of an Array, where we cannot change the container array / object literal, but we can modify the
// content inside that container.

// Nesting Arrays and Objects
// So we can have array having objects as its elements
// we can have objects containing array inside it
// We can even have objects containing nested objects inside it.
// and this chain can go on and on.

// one simple example for this is as below
const comments = [{
        'username': 'Tammy',
        'text': 'lolololol',
        'votes': 9
    },
    {
        'username': 'Fisjboi',
        'text': 'glub glub',
        'votes': 2345566
    }
]
console.log(comments);
// So this one has created array containing objects

// another example:

const people = {
    'name': 'kamal',
    'age': '91',
    'hobbies': ['summing', 'dancing'],
    'subjects': {
        'maths': 90,
        'physics': 100
    }
}
console.log(people);