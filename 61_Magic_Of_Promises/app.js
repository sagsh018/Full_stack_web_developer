// So as we have seen in our previous section that even after introducing the promises there is no significant improvement on
// the syntax. We have seen that even after having promise returned from below fakeRequestPromise and calling .then and .catch
// methods on that promise didn't solve the nesting level problem and we still had lot of nesting.

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

// If we see above fakeRequestPromise() function definition, unlike in case of callbacks, we are not passing success and failure
// callback functions as parameters to this function. Instead we are returning a promise from within this fakeRequestPromise and
// passing our callback functions : "resolve" and "reject" to this promise as parameters. Also notice, these resolve and reject 
// callback correspondence to "fulfilled" and "rejected" status of this promise that we have seen in our previous section.

// Later, when we are calling these reject and resolve callbacks inside above shown fakeRequestPromise() function we are also
// passing arguements, which are nothing but the data that will be received to these callback definitions when they will be defined
// inside fakeRequestPromise() calls as below :

// So previously we have observed that we were chaining .then and .catch methods on the promise returned from fakeRequestPromise().
// Now inside this fakeRequestPromise(), we could also return a promise from inside .then() as below and then directly chain another .then onto that returned promise:

fakeRequestPromise('books.com/page1')
    .then((data) => {
        console.log("Page 1 successful !", data);
        // Here at this line, we can just directly return a promise instead of just calling the fakeRequestPromise as we have seen previously :
        return fakeRequestPromise('books.com/page2');
    })
    // So as we can see that the promise is returned from above mentioned .then() method, hence we will call .then onto it directly as below :
    .then((data) => {
        console.log("Page 2 successful !", data);
        // again return a promise from here :
        return fakeRequestPromise('books.com/page3');
    })
    .then((data) => {
        console.log("Page 3 successful !", data);
        // Thats all. We will stop here and won't return any new promise from here as we just wanted to call only three pages.
    })
    // If you notice we have not used any .catch() as we did in our previous promise example. The reason is that using above approach we could use a single .catch which will
    // catch all the above failed request :
    .catch((err) => {
        console.log("Ohh Noo ! the request has failed !", err);
})

// Now one thing to notice above above code is that we have only one .catch generic for all the failed attempts. So if the very first call itself fail, it will fall all the way
// down to .catch and print the message as mentioned.

// Also, we can see that inside the .then and .catch method we have defined our same reject and resolve callback functions that we have called in above mentioned fakeRequestPromise()
// function definition. Hence, here both the .then callback as well as .catch callback functions are receiving data and err respectively So here the promise is getting fulfilled 
// and rejected with the data we have passed :
