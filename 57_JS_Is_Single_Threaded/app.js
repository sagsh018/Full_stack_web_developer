// So here we are going to further see the inner functionality of JS.
// One thing to know about about JS which is very important is that :
// JS is Single Threaded.

// So what does this exactly mean ?
// At any given point in time, that single JS thread is running at most one 
// line of JS code. That means JS does not do multi tasking or multi-threading
// is not there in JS.

// Please note, JS can switch between different tasks back and forth and it does it very fast, So we don't worry that only one
// thing is happening at one time. But reallity is that JS only runs one statement at one time.

// Now because of this nature of JS being single threaded, there are few things we will have to think and take care of.

// For example, let say in our JS code we are making a call to an API (let say a movie API to get the list of movies) or making a 
// request for huge data to the database. These request could take time and image that while these requests gets completed, JS 
// just waiting for them to complete as it is going to do / run one statememt at a time.

// Consider one such example below :

// const newTodo = input.value; // get user's input
// saveToDatabase(newTodo); // this could take a while due to multiple reasons such as slow network, server busy, etc
// input.value = ''; // reset form

// So if we see above code snippet, if we consider default behavior JS for executing one statement at a time, between statement
// 21 and 23, JS will be just sitting idle and not doing anything and waiting for a reply from DB after saving data.

// Fortunately, we have work arounds for this.
// Consider one such workaround below, using setTimeout() method.

console.log("Sending request to server !");
setTimeout(() => {
    console.log("Here is your data from the server");
}, 3000);
console.log("This is the last line of code.");

// Now, in the above code snippet, if we will run this, we will observe that first line will be printed. Then, JS will run
// next piece of code which has setTimeout() method and then, instead of waiting for 3000 ms as mentoned in the call arrow function,
// It will just move on and print the last statement. Then, when the setTimeout() timer finishes, it print the second line.

// So we can say that even though the JS is single threaded, it is still just not sitting and waiting to second line setTimeout()
// method to finish and then print the third line here.

// So then, how is JS able to take care of above scenario even though it is a single threaded. Well its not the JS that is taking care
// of this alone. It is your browser that takes care of such situations. Please read below :

// * Browsers come with Web APIs that are abe to handle certain tasks in the background (like making requests or setTimeout()).
// * The JS call stack recognizes these Web API functions and passes them off to the browser to take care of.
// * Now, these browsers are not written in JS and are written in multi-threaded programming languages such as Java or C, C++ and 
// once the browsers finishes those tasks, they return and are pushed onto the call stack
// * From there, JS then takes care by calling that remaining piece of code.

// So couple of things to notice here are :
// * Our browsers have functionality to handle such things for us in JS.
// * This callback function that we have passed inside the setTimeout() method. By wrapping things inside this callback function
// We are making sure that the things do not execute right there and instead just available as a function and called when their 
// time comes. Which in this case comes after 3000 ms.

// You can also run above example by replacing arrow function with normal function on loupe site to check how JS offload the task
// of setTimeout to browser as a Web API and after finishes, how the task is added back to call back queue from where JS take over 
// again. 