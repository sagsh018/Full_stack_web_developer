// Arrow function behaves very differently in terms of value for the keyword "this" inside an arrow function vs
// a non-arrow function or normal function.

// Let's consider an example :

const person = {
    firstName: "Sagar",
    lastName: "Sharma",
    fullName: function(){
        return `${person.firstName} ${person.lastName}`;
    }
}
console.log(person.fullName());

// Now lets consider the same thing by using "this" keyword as below :

const personWithThis = {
    firstName: "Sagar",
    lastName: "Sharma",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(personWithThis.fullName());

// So in above example the keyword "this" refers to whatever comes to the left of the function "fullName()" when called
// inside console.log statement. This is an exact same behavior where this refers to, with whose respect it is being
// called. In this case it is personWithThis object, so it has taken personWithThis object's firstName and lastName.

// Now suppose if we replace the above example with an arrow function inside of object as below :

// const personWithArrowThis = {
//     firstName: "Sagar",
//     lastName: "Sharma",
//     fullName: () => {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//
// console.log(personWithArrowThis.fullName());
// Output for above program will be ::: "undefined undefined", instead of "Sagar Sharma".
// Please note, inside an arrow function, the keyword "this" is just going to refers to the scope that it was created in.
// So in above example, the keyword "this" was created in the scope of windows object:

const personWithArrowThis = {
    firstName: "Sagar",
    lastName: "Sharma",
    fullName: () => {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(personWithArrowThis.fullName());

// Output ::
// Undefined Undefined
// Window http://localhost:63342/Full_stack_web_developer/34_Arrow_Function_&_this/index.html?_ijt=rbo3oqt78oj2skudmb11sdlsc4&_ij_reload=RELOAD_ON_SAVE

// So if we try to check :

console.log(window.firstName); // Also gives undefined. As firstName is attribute of personWithArrowThis object and not Window's.

// When we use normal/non arrow function, the keyword "this" has nothing to do with scope in which it is created. It depends on
// with respect of which object it is being called. That is, what is on the left side. i.e. how the function is executed.

// Now this functionality of this keyword behaving differently in case of arrow function is by design. This is because, there
// are times when it difficult having to worry about the execution context and how it impacts the keyword this.

// Let's consider an example below :
// Suppose let say we want to call fullName() method after 3 sec. So we will modify the person object as below to include another method called
// shoutName :

// Note, we will be using fullName function as an arrow function in below example to show why this different behavior of "this" keyord is
// required in case of arrow function.

const personWithReasonOfThisBehavior = {
    firstName: "Sagar",
    lastName: "Sharma",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },

    shoutName: function() {
        setTimeout(function () {
            console.log(this.fullName())
        }, 3000)
    }
}

console.log(personWithReasonOfThisBehavior.shoutName());

// Now above console.log statement has returned below error :
// caught TypeError: this.fullName is not a function
// The reason behind this error is again because of the execution context. this.fullName() is being called by function setTimeout() and
// setTimeout() is not a method on person object, rather it's a Windows object and therefore when fullName is called by execution context(which
// in this case is setTimeout() ), it resulted into function not found error.

// Now this is where its become annoying when using this keyword with respect to execution context everytime.

// Now suppose, if we replace the normal function with an arrow function as below :

const personWithArrowNowforThisKeywordBehavior = {
    firstName: "Sagar",
    lastName: "Sharma",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this); // this will show the value of this keyword in case when it is called inside of arrow function
            console.log(this.fullName())
        }, 3000);
    }
}

console.log(personWithArrowNowforThisKeywordBehavior.shoutName());

// Remember, keyword "this" inside any arrow function. it's just the same value of the keyword this in the scope where the function was
// created. So that means the keyword this in above example is exactly the same as the keyword this in shoutName function, and inside shoutName
// function, keyword this will refer to fullName() method of "personWithArrowNowforThisKeywordBehavior" object. This how we could actually
// resolve the issue fased above by using this keyword inside arrow function



