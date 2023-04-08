// All methods are functions.
// But all functions are not methods.
// functions defined inside an object literal, is called as method.
// Like we define attributes inside object literal, we also can define functions and those functions
// are called methods.

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

// using this keyword
//  is used in order to access the object literal properties inside the methods of that object literals. This could be considered as one of
// the main use of it.
// consider the below example

const person = {
    'name': 'paul',
    'age': '26',
    getInfo() {
        console.log("This is : ", this);
        // Above ine will display what 'this' keyword is referring to. It is basically referring to this particular object.
        console.log(`${this.name} is ${this.age} year old`);
    }
}

console.log(person.getInfo());

// Now suppose if we take another variable and point it to getinfo method

const getInfo2 = person.getInfo;

console.log(getInfo2());
// When we will execute above line of console.log, it will not print properties of the object literal referenced by 'this'
// keyword, The reason is : 'this' keyword work on the bases of, from where it has been invoked
// in case when it is invoked with the object.method name then 'this' will refer to that object properties.
// whereas in above case of getinfo2() calling it is not called with person....., it is not referring to person object,
// rather it is referring to main object called windows object.

// Note that whenever we open up a browser, and start working with javascript, a top level object is created named windows.
// Also note that whenever we create any function in a javascript file or on console, that function is automatically
// added in the windows object.

// So the above function : getinfo2() can be called directly, as well as with window.getinfo2() like this as well.

console.log(window.getInfo2());