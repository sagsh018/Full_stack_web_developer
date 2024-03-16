// Introduction to "promises" in JS. 
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.


// So here we are going to understand the most commonly used example that is used in production, which is making a request to 
// let say an Amazon API or making a request a weather API or NetFlix API, etc. 

// Now these API calls may take any amount of time and also they could pass or they could fail as well. So we will be understanding
// these examples using first by callback and then by using promises.

// So lets create a function named fakeRequestCallback() which will mimic the commonly used real world scenario for sending request
// to let say an API.

// THE CALLBACK VERSION
const fakeRequestCallback= (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay)
}

// So in the above code we have created a function definition named : fakeRequestCallback() which takes "url" and two callback
// methods named success and failure as a parameters. Inside the function we have a setTimeout() function which will wait for
// random amount of delay we generate using Math.random() function and after that we pass the response or error message to 
// success and failure callback functions based on timout value.

// So in above function definition, if the delay is less than 4000 ms, then success callback function is called and inside that we 
// are passing the message as an arguement that will be received by success callback function parameter when it will be called
// later. Similarly, if the delay is more than 4000 ms, then failure callback function is called inside which we have passed 
// again a message as an arguement which will again be received as a parameter by a failure callback function when it will be called.

// So lets go ahead and call our fakeRequestCallback function below :

// fakeRequestCallback('book.com/page1', function(response) {
//     console.log('successful for page 1', response);
// }, function(err) {
//     console.log('ERROR ! for page 1', err);
// });

// So we can clearly see how the response and err are passed from callback function above in the fakeRequestCallback() function definition, to 
// these success and failure callback functions when they are defined in above in the fakeRequestCallback() function call.
 
// Now, let say that we want to receive page 2 using the same fake request function api call if and only if the request for page 1 
// succeeds.

fakeRequestCallback('book.com/page1', function(response) {
    console.log('successful for page 1', response);
    fakeRequestCallback('book.com/page2', (response) => {
        console.log('successful for page 2', response)
        fakeRequestCallback('books.com/page3',(response) => {
            console.log('successful for page 3', response);
        }, (err) => {
            console.log('ERROR ! for page 3', err);
        })
    }, (err) => {
        console.log('ERROR ! for page 2', err);
    })
}, function(err) {
    console.log('ERROR ! for page 1', err);
});

// So we can see how we are nesting the page 2 and page 3 request in our callbacks so that only after the page 1 request succeed, the
// page 2 and page 3 request will run. Similarly if only the page 2 succeed then only page 3 will run This exactly where the 
// callbacks in JS are used. But as we can see that the above code has already become quite tedious to handle using lot of nested
// callbacks. That is the reason why Promises were introduced in JS.
