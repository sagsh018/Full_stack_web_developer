// Arrays in JavaScript are continuous collection of hetrogeneous elements
// We can even contain arrays inside array

// To make an empty array
let students = [];

// An Array of strings
let color = ["red", "green", "yellow"];

// An array of numbers
let lottoNumbers = [20, 30, 50, 60, 86];

// A mixed array
let stuff = ["string", 94, [40, 30], true];

// Arrays in JavaScript are mutable. Note that strings in JavaScript are immutable
// Below is the example of Arrays in JavaScript

let names = ['One', 'two', 'three'];
console.log(names);

// Index for arrays also starts from 0 and length of the array is 1 plus the last element index.
// We can directly insert the 10th eement in the above example array and then the element in the middle 
// will be marked as undefined

names[10] = 'Ten'
console.log(names);
// This will show 7 empty slots in the middle and if we try to access any of this middle empty slot
// it will give undefined

// Push and Pop function for array

// push function helps us in adding one or more than one elements at the end of an array, just like pushing element on
// the top of stack. Also note that this push function updates the actual array and return the updated size of an array.

// pop function is used to remove one element from the end of an array. and this function also updates the actual array
// and this pop function returns the element that is poped out of the array.

// shift and unshift functions of Array in JavaScript

// shift method is basically remove the very first element of an array. It modifies the actual array and return the element
// that is removed.

// unshift method adds one or more element at the start of an array. This also modifies the original array and return the
// size of an array after adding the element at the start.

// concat() method
let cats = ['cat1', 'cat2', 'cat3'];
let dogs = ['dog1', 'dog2', 'dog3'];
let pets = cats.concat(dogs);
console.log(pets);
let pets1 = dogs.concat(cats);
console.log(pets1);
// So order of elements differ based on array names we write in above example.

// includes() method, this check the availability of an element in the array and return boolean true or false. Case sensitivity counts.
cats.includes('cat1')

// indexOf() methods, similar to the indexOf method in case of string. It returns the index of an element in an array
// and return -1 if the element is not present in an array.
cats.indexOf('cat2')

// reverse() method, it reverse the array. It is inplace.
pets1.reverse()

// slice()
// This function helps in extracting the sub array from the array this function is called by.
// This function takes in following arguements : start - which is starting index 
// end - Which indicate the index till which we are going to extract the array but notice that the end element itself is not
// included.
// We could also make use of negative index and extract the elements from the last of an array.
// Note that this function returns the sub array from the original array and does not modifies the original array.
let newpets = pets.slice(1, 4);
console.log(newpets);

let somemorepets = pets.slice(-2);
console.log(somemorepets);

// splice() method
// This method takes up three arguements : 
// a) index starting position
// b) how many items to be deleted/replaced
// d) item that need to be inserted.

let colors = ["red", "green", "yellow", "violet", "cream", "blue", "orange"];
console.log(colors);
console.log(colors.splice(5, 1));
console.log(colors); // This will not have color blue in it.
// [ "red", "green", "yellow", "violet", "cream", "orange" ]
console.log(colors.splice(2, 0, "green-yellow"));
console.log(colors); // This will show that green-yellow will be inserted at the index location "2" given in above statement.
// [ "red", "green", "green-yellow", "yellow", "violet", "cream", "orange" ]
colors.splice(4, 2, "DELETED!!");
console.log(colors); // This will delete two items from index location 4 and replace them by work "DELETED!!"
// Note that splice is inplace method. it modifies the original array. It returns a deleted item inside an array. So basically it returns an 
// array of one or more items deleted.

// sort() method,
// This method basically sorts the element of an array based on there unicode values and is not ike a normal sort.
// we will come back to this later when we will start learning on how to pass functions to this methods and specify the
// criteria on which this sort function will work.
// from console ::
// let score = [1, 2, 100, -12, 2500, 9, 7];
// undefined
// score.sort()
// Array(7) [ -12, 1, 100, 2, 2500, 7, 9 ]
// So as we can see that sort method sorted the numbers based on their first digit's unicode value and it does not work as normal sort method

// Reference types and equality testing.
// Note that both "==" and "===" check for the equality with respect ot the reference to an element or an array.
// notice below

let a = 50;
let b = 50;
console.log(a == b); // print true, because both a and b are refering to same element "50". that means there is one number
// 50 stored at one memory location and both a and b are referencing to the same memory location.

// but this is not the case with array. whenever we create two different arrays, they both got save in differnet memory 
// location and thats why the referencing also differs

console.log([1, 2, 3] === [1, 2, 3]); // This will pring false. because reference to both the arrays is different.
// Same will be a result of "==".

// now consider below example:
num = [100, 200, 300];
copyNum = num;
console.log(num);
console.log(copyNum);
num.push(400);
console.log(num);
console.log(copyNum); // notice that even though we have just pushed the element in the num array. it got reflected in 
// copyNum array as well
console.log(num === copyNum); // this will give true this time, as both are referencing to same array this time.


// const with arrays.
// As we have seen previously that by using const keyword with any variable, we can restrict the reassignment of that
// variable
// consider below example:
const number = 10;
console.log(number);
// number = 15;
// notice that this will not be allowed.
// but this is not the case with an array.
// Lets define an array with const
const arrNum = [1, 2, 3, 4];
console.log(arrNum);
arrNum.push(5);
console.log(arrNum);
// Notice that we are able to update the array content even though the array was defined as constant.
// Reason behind this is that the variable that is referencing to the array is just referencing to the array and not the
// content inside it.
// So we can perform all the operations on the array which will change the content of an array.
// but note that reassignment of an array is not allowed
// arrNum = [1,2,3,4]
// notice even the same elements are not allowed to be reassigned as this will create new array with same name which
// is not allowed due to const keyword


// Multi-dimensional Array
// This is nothing but array containing other array.
// Below is the example of 2 Dimentional Array
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

console.log(airplaneSeats);
airplaneSeats[3][1] = "Hugo";
console.log(`Below is the seat arrangement now \n ${airplaneSeats}`);