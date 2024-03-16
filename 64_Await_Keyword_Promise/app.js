// So as we have seen that async function automatically returns a promise. Now, we will see more about await keyword here.
// In laymen terms we can say that await keyword allow us to write the async code in a way that it looks like synchronous.

// Formally :

// * We most commonly use the await keyword inside of functions declared with async keyword.
// * await will pause the execution of the function, waiting for a promise to be resolved before continuing on.

// Now, lets consider our delayedColorChange function from previous sections :

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); // we are just calling the resolve callback function just to simply resolve the promise after setting up the color. Also, notice we are not calling reject callback because we don't need to call in this use case.
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => {
//         return delayedColorChange('orange', 1000);
//     })
//     .then(() => {
//         return delayedColorChange('yellow', 1000);
//     })
//     .then(() => {
//         return delayedColorChange('green', 1000);
//     })
//     .then(() => {
//         return delayedColorChange('blue', 1000);
//     })
//     .then(() => {
//         return delayedColorChange('indigo', 1000);
//     })
//     .then(() => {
//         delayedColorChange('violet', 1000);
//     })

// Now, the above function that is returning a promise is definitely an improvement over callbacks. However, lets now call this using async keyword instead of explicitely returning the promise using return keyword:

// async function rainbow() {
//     delayedColorChange('red', 1000);
// }

// So if now just call this async function rainbow in web console, it will automitically return a promise that is being returned by delayedColorChange() function and we will get it as resolved :

// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

// Now, lets add further color entries in our rainbow async function as :

// async function rainbow() {
//     delayedColorChange('red', 1000);
//     delayedColorChange('orange', 1000);
//     // We now know that above both the delayedColorChange function calls return promise but now the second call will not wait for first call to finish and it leads us to same problem of code not waiting and changing the color one by one because we are
//     // not using .then() here to go step by step.
// }

// Instead we can use a await keyword here which will make sure that whenever anywhere the promise is returned, it will wait for it to resolve and then only proceed further.

// async function rainbow() {
//     await delayedColorChange('red', 1000);
//     await delayedColorChange('orange', 1000);
// }
// rainbow();

// Now, we have defined the above function rainbow as async then this will also return a promise and let say we add a return statement at the end of this rainbow after changing all 7 colors of rainbow and then only print "Rainbow ended"

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return "Completed !" // This will make sure that returned promise due to async in from of this function above is resolved/fulfilled as well as we are returning this with a a value.
}

// rainbow()
//     // Since rainbow is also returning a promise because it is async we can chain .then with it
//     .then(() => {
//         console.log("Rainbow Ended !")
//     })

// I could also do the above as below :

async function printRainbowStatus() {
    await rainbow();
    console.log("Rainbow Ended");
    // So instead of calling .then on returned promise and make it wait for 7 sec (rainbow color change) , we have used await in front of it so that until the promise returned by rainbow is resolved, it will not print the message.
}

printRainbowStatus();

// Now so far the promises that we have seen using async keyward are being returned with no values or data. Even if we have returned them with a value like that of rainbow, we have not used that value while calling it with "await keyword".
// So now we will try implementing the async functions that will return promise with values :

// consider another example that we have seen in our previous sections related to fakeRequest :

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject("Connection Timeout !")
                // So here the promise is rejected with the data
            } else {
                resolve(`Here is your fake data from ${url}`);
                // Here the returned promise is resolved with the value
            }
        }, delay);
    })
}

// async function makeTwoFakeRequests() {
//     let data1 = await fakeRequest('books.com/page1');
//     console.log(data1);
//     // So now we would only be print the data1 using above console.log statement if the promise gets resolved successfully. But if the promise gets rejected and returned then we don't have to make sure to catch it as well otherwise it will break the code 
// }

// To take care of rejected promise, we will make use of try and catch block :

async function makeTwoFakeRequests() {
    try {
        let data1 = await fakeRequest('books.com/page1');
        console.log(data1);
        let data2 = await fakeRequest('books.com/page2');
        console.log(data2);
    } catch (err) {
        console.log("Caught an error");
        console.log(err);  // So this is where we will catch the rejected promise using this err 
    }
}