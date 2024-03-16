// Here we are going to talk about another improvement of JS promises in terms of syntax, which are called as
// Async functions.

// Async functions are a newer and cleaner syntax for working with asyn code. So basically Async functons does
// give anything new functionality to us, instead they just make the code whole lot cleaner.

// So in this making of promise code looking better we are going to use two pices of keywords :

// * Async
// * await

// So lets firstly learn about the async keyword.

// So the async keyword is used to declare a function as an async function that stands for asynchronous function.
// The first and most important thing to notice here about the async keyword that by putting async in front of
// a function we make a function asynchrounous and an async function always returna a promise 

// Even though you do not mantion explicit return of the promise like we did in our previous lecture inside the
// fakeRequest function, if we just declare the function as async, the function by default returns a promise.

// For example, below we are just declaring a function with async keyword :

// async function hello() {

// }

// If we call this function in browser console, we see that functon returns a promise :

// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

// Even though we haven't mantioned explicitly to return a promise like below from within the function:

// return new promise()

// Similarly we could also declare async functions using arrow function :

// const hello = async () => {

// }

// This will also return a promise like above.

// Now second thing to note about a async function is that, if that async function returns a value than,
// the promise will be resolved with that value. Notice in above example, the promise was getting resolved but
// the value was undefined.

//Now let say we return a value from an async function :

const sing = async () => {
    return 'LA LA LA LA';
}

// sing();

// Promise {<fulfilled>: 'LA LA LA LA'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "LA LA LA LA"

// So as we know now that async function by default returns a promise, therefore we can chain on the .then()
// with that as below :

sing()
    .then((data) => {
        console.log("Promise returned with : " + data);
    })

// Promise returned with : LA LA LA LA

// So as we can see that above sing asycn function has returned a promise with resolve callback and data 
// "LA LA LA" as a parameter, which we have passed as an arguement in the .then() when called.

// Now similar to value return above and promise resolved with a value returned, if the function throws an
// exception, the promise gets rejected. So to throw an exception from within a async function we make use 
// of a throw keyword :

const functionWithThrowKeyword = async () => {
    throw new Error('Oh noo');
}

functionWithThrowKeyword();

// Promise {<rejected>: Error: Uh Oh !
//     at functionWithThrowKeyword (http://127.0.0.1:5500/63_Async_Keyword_Promises/app…}
//     [[Prototype]]: Promise[[PromiseState]]: "rejected"
        // [[PromiseResult]]: Error: Uh Oh !
//     at functionWithThrowKeyword (http://127.0.0.1:5500/63_Async_Keyword_Promises/app.js:81:11)
//     at <anonymous>:1:1

// we could also throw a simple string from within the async function and it will still be rejected. Example :

// throw "New String";

// So we can see from above that if return an error or there is an error inside the async function, than that
// promise returned will be rejected. 

// So as we have seen above that we can chain on the .then() on the promise returned, we can also chain on
// a .catch for rejected promises :

const test = async () => {
    throw "Errorororororor";
}

test()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Promise returned with : ", err)
    })

// Promise returned with :  Errorororororor

// Now lets mimic a login screen using above async functions :

const loginFunction = async (username, password) => {
    if(!username || !password) {
        throw "Missing Crredentials !";
    }
    if(password === "Welcome@2024") {
        return "Welcome !"; // Notice here we  are returning a value and promise should resolve/fulfiled with 
                                // this value
    }
    throw "Invalid password";
}

loginFunction('sgsharma', 'Welcome@2024')
.then((msg) => {
    console.log("Logged in");
    console.log(msg)
})
.catch((err) => {
    console.log("Error");
    console.log(err);
})