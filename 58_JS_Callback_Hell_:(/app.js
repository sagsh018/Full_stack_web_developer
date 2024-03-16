// So here we are going to understand what is a role of callback in JS.
// To understand this, we have created a simple index.html file with a h1 heading says hello.
// Now, let say we want to change the background color of the body of the page from one color to different color, one by one.

// So obviously if we will apply all colors at once like below :

// document.body.style.backgroundColor = "red";
// document.body.style.backgroundColor = "orange";

// So this above way of doing all the colors at once will basically apply red and then turn it to orange immediately so fast that 
// you will not see red on screen at all. But let say we want to have certain delay between the applied colors so that we could see
// all the colors on screen one by one instead of as above.

// So to include this delay, lets use setTimeout internval as below :

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
// }, 1000);

// So this will set the color as red after 1 sec. Now, let say we want to further set color as orange after 1 sec of red.
// For this we will again set the time interval as 1000 ms as above for orange, it will show up orange and not red, because both
// red and orange has the same interval.

// Therefore, for orange we will make the interval as 2000 ms so that exactly after 1 sec of red, we will see orange :

// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
// }, 2000);

// Similarly, if we want to add yellow :

// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
// }, 3000);

// Another way of doing them is to nest the setTimeout function into one another with same time internval, so they will successively 
// run 1 sec later that the previous one. See the example below :

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                     document.body.style.backgroundColor = "green";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "blue";
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = "teal";
//                             setTimeout(() => {
//                                 document.body.style.backgroundColor = "olive";
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// So this is good and it is working as expected. Now, we would also createa a more generic function that can be called with 
// parameters such as let say color that we want to change to and after how much delay :

// So lets create a function :

// const delayedColorChange = (newColor, delay) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//     }, delay);
// }

// Then, we can call the function as below :

// delayedColorChange("pink", 1000);

// But now again if want to set a different color :

// delayedColorChange('yellow', 1000); // This will again not work and change the color to yellow all at once and you will not see pink
// So it turned out to be similar situation as before where we were applying all the colors at once.

// To overcome this, we could pass in a callback function as a parameter to our delayedColorChange method as below, and then call,
// that callback everytime inside delayedColorChange when we want to apply more colors :

const delayedColorChange = (newColor, delay, callback) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        if(callback) { // Just to ensure that callback method is passed. If it is not passed, then we will not more further.
            callback();
        }
    }, delay);
}

// Now, lets call the above function :

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('green', 1000, () => {
            delayedColorChange('blue', 1000, () => {
                delayedColorChange('teal', 1000, () => {
                    delayedColorChange('olive', 1000)
                })
            })
        })
    })
})

// So here we are again able to replicate what we have replicated by calling setTimeout function nested inside one another. However, 
// this time we have a generic function where we can specify different colors as well as different delay times. As well as we are
// then passing a callback as a parameter, where we can call delayedColorChange() again to apply successive colors with delays of
// 1000 ms.

// So in JS where we come across a situation where you have one dependency of doing one thing and only after doing the first thing 
// second thing has to be done. In all such situations we use callback.

// This pattern that we have seen above is very common to be used, where we will be using a callback to perform certain action,
// only when the first task gets completed.

// Consider a dummy example below :

// Suppose we have function created to search movies in a movie database and this function will take two parameters : movie name
// that we want to search and a callback function what will execute once the movie is searched and returned back from movie database.


// searchMovieAPI('amadeus', () => {
//     // Now, we do not know how much time the movie search is going to take, but when it completes, execute the callback we are passing
//     // as an arguement. Now we don;t know the function definition of searchMovieAPI as this is just a dummy. But definitely 
//     // it will be taking callback as a parameter.

//     // Now inside of this callback, suppose we are trying to save the searched move data to my database. Therefore, I will use :

//     saveToDB(movies, () => {
//         // If it works, run this
//     }, () => {
//         // if it doesn't work, run this
//     })
//     // This is similar to success and failure we have seen in prod codes.
// }, () => {
//     // If movieAPI call fails due to any reason than run this.
// })

// Now, as we can see that usage of these nested callback can turn the code into really complicated one. Therefore, we call this as 
// callback hell !
// We have a work arounds for this which are called as promises in JS.