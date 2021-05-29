// All methods are functions.
// But all functions are not methods.
// functions defined inside a object literal, is called as method.
// Like we define attributes inside object literal, we also can define functions and those functions
// called methods.

const myMath = {
    'PI': 3.14159,
    'square': function(num) {
        return num * num;
    },
    'cube': function(num) {
        return num ** 3;
    }
};
// So here functions are defined as property of the object literal called myMath
console.log(myMath.PI);
console.log(myMath.square(3));
console.log(myMath.cube(9));

// Note:: We can even write the methods inside an object literal without using function keyword as below

const myObj = {
    add(x, y) {
        return x + y;
    }
}

console.log(myObj.add(2, 4));