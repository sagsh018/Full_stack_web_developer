// So till now we have learnt how to call promise in our previous section and it is the most importand thing to understand how to call a promise and understand how and when it
// will be fulfilled and when it will get reject.

// Now moving forward, in this lecture we are going to learn how to create a new promise :

// So this is how we always create a promise using a Promise and new statement :

// new Promise()

// inside this Promise() function we have used above always expect a function inside it and to this function we pass in two callbacks as paramters which are "resolved" and 
// "reject"

// new Promise((resolve, reject) => {

// })

// As we already know, these resolve and reject callback names corresponds to promise "fulfilled" and "rejected" status when promise is called.
// Also, you can name these resolve and reject anything as they are just parameters.

// Now, lets create a sample promise as mentioned above :

// new Promise((resolve, reject) => {

// });

// If we keep the promise empty as above and does not call resolve or reject inside that. You will notice that in browser console, you will find promise status
// as pending and it remains like this until you will call either of resolve or reject inside the promise definition.

// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

// This status will not change until we call resolve or reject inside above Promise definition :

// new Promise((resolve, reject) => {
//     resolve();
// })

// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

// As we can see that the promise got resolved immediately as soon as we have called it with resolve() inside it.

// Similarly, we can try with calling reject() immediately inside it :

// new Promise((resolve, reject) => {
//     reject();
// })

// Promise {<rejected>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: undefined

// To understand further, lets create a fakeRequest promise :

const fakeRequestPromise = (url) => { // specifying the URL we will make fake request to
    // Here we will define our promise and return it :
    return new Promise((resolve, reject) => {
        // We will wait for 3 sec and then resolve the promise :
        setTimeout(() => {
            resolve();
        }, 3000)
    })
}

// let req = fakeRequestPromise('books.com/page1');
// console.log(req)

// So until 3 sec completes it will be pending and after that it will resolve :

// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

// After 3 sec (setTimeout()), it will be fulfilled :

// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

// Now instead of printing the promise returned as above, we could now chain .then() with our returned promise and do some work in promise fulfilled as below :

fakeRequestPromise('books.com/page1')
.then(() => {
    console.log("Promise FULFILLED") // So this will print promise fulfilled after 3 sec.
})

// Lets make a new function that will again return a promise as we did in our previous section :

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Data returned"); // This is a data we are passing that will received by .then callback function as "data"
            } else {
                reject("Request TIMEOUT"); // This is a error we are passing that will be received by .catch callback function as "err"
            }
        }, rand)
    })
}

// lets call this fakeRequest function :

fakeRequest('books.com/page1')
    .then((data) => {
        console.log("Success : " + data);
    })
    .catch((err) => {
        console.log("FAILED : " + err);
    })

// Lets do another example to change color as below :

const delayedColorChange = (color, delay) => { // Notice how we are just passing the color and delay and callback functions as we were passing at the time of callback
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); // Here we don't have any requirement of rejecting the promise, therefore we are just calling resolve after delay amount of time.
        }, delay)
    })
}

// lets call now :

// delayedColorChange('red', 1000)
// .then(() => {
//     delayedColorChange('orange', 1000)
// })

// So using above we could see how we can change the color with delay using multiple color.

// Now lets modify this a bit by returning a promise from within, when it will be called so that we can directly chain .then() onto it :

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000)) // These are implicit return of arrow function
    .then(() => delayedColorChange('yellow', 1000)) // These are implicit return of arrow function
    .then(() => {
        return delayedColorChange('green', 1000); // explicit return
    })
    .then(() => {
        return delayedColorChange('blue', 1000);
    })
    .then(() => {
        return delayedColorChange('indigo', 1000);
    })
    .then(() => {
        return delayedColorChange('violet', 1000);
    })


// So we can see that above code is lot better to read in comparison to callbacks we have seen where there was lot of nesting.