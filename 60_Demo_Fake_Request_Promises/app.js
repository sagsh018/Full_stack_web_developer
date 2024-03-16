// So as we have learnt previously that The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers 
// with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like 
// synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the 
// value at some point in the future.

// So lets go ahead and re-write the same fakeRequestCallback () functon again using promises below :

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject("Connection timeout");
            } else {
                resolve(`Here is your fake request data from ${url}`);
            }
        }, delay)
    })
}

// So above function does the exact same this thing that we have seen previously. Except this time it does not expect to pass the
// success and failure callback functions.

// To understand how this is working, lets open this up in browser and in console, we will call fakeRequestPromise() with fake 
// URL as below :

// const res = fakeRequestPromise('books.com/page1');
// res
// This returns a promise object as mentioned below :

// =======================================
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined
// =======================================

// So if we observe the above promise object returned we will see that the "PromiseState" is currently shown as pending and 
// "PromiseResult" is shown as undefined. So currently the actual value is not returned but the promise is returned which says
// there is going to be a value.

// if we again print the "res" variable in our browser console :

// res 

// ==========================
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Here is your fake request data from books.com/page1"
// =============================

// So now we see that the promise that was returned with no value and with pending status is now fulfilled and the value
// from our fake api also returned.

// Now let say if we consider and example where our API call gets a connection timeout (case where delay > 4000ms), then :

// ===========================================
// Promise {<rejected>: 'Connection timeout'}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "Connection timeout"
// ============================================

// So we can see that in above example the delay was given a value more than 4000 ms and the connection timout happen and the 
// promise has returned status as "Rejected"

// So if we observe, this promise that is returned can have 3 states :

// * Pending : where the promise is returned but not fulfilled or rejected. That means promise returns this async value which
//              will eventually fulfilled or rejected.
// * fulfilled : the promise returned is now fulfilled
// * rejected : the promise returned was rejected

// Above mentioned "fulfilled" and "rejected" are nothing but "success" and "failure" as we have seen in callbacks.

// So what we can do is that, we can run certail piece of code when promise is fulfilled or rejected. The way we can do this is
// by attaching callbacks to the promise object that was returned, rather than passing callbacks into the functions as we have 
// seen in previous secton.

// So we will wait for promise to return and then we will have our callbacks attached to this returned object and they will
// specific piece of code on both fulfilled and rejected. So here we will be using two new methods called "then" and "catch" 
// as below :

// const request = fakeRequestPromise('books.com/page1');

// request
//     .then(() => {
//         console.log("Promise Fulfilled")
//         console.log("It worked");
//     })
//     .catch(() => {
//         console.log("Promise Rejected")
//         console.log("Oh NoOOOO, connection timout");
//     })

// So we can see how we are using .then and .catch method to run when request is fulfilled and rejected repectively and inside
// both the then and catch method we are passing callbacks to run in both condition.

// So similar to how we have created nested requests to different pages of the book, we can do the same here as below :

fakeRequestPromise('books.com/page1')
    .then(() => {
        console.log("Page 1 successfull");
        fakeRequestPromise('books.com/page2')
        .then(() => {
            console.log("Page 2 successfull");
            fakeRequestPromise('books.com/page3')
            .then(() => {
                console.log("Page 3 successfull");
            })
            .catch(() => {
                console.log("Page 3 error");
            })
        })
        .catch(() => {
            console.log("Page 2 error");
        })
    })
    .catch(() => {
        console.log("Page 1 error");
    })