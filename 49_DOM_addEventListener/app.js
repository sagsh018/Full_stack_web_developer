// So here are going to learn third and most widely used and best way for working with events, which is called as "addEventListener()"
// In event listener, you will add the event type and then callback to run.

// Using this addEventListener() also we will be adding in our JS file like we have used onclick property in last section.
// we will also see how this method is best and its advantages.

// Firstly, in this app.js file let's just write code for button with id 'v2' using an onclick property that we have written in previous
// section :

const btn2 = document.querySelector('#v2');
btn2.onclick = () => {
    alert("You have clicked Second Button");
}

// So to understand the this new method addEventListener, we are going to add a third button in our html file with id as v3. Check out the html
// file. After creating the button in html file, lets select it in here :

const btn3 = document.querySelector('#v3');
// Now on this btn3 we can call addEventListener() method as below :

btn3.addEventListener('click', function() {
    alert('CLICKED')
});

// Now, notice how we have mentioned the event name as 'click' here. This means that the callback function will get executed as soon as the 
// click event will happen.

// In place of this 'click' event, we can also specify other event names as well :

// btn3.addEventListener('dblclick', () => {
//     alert('CLICKED')
// });

// Note : You can find the list of all available events like the 'click' we have used above on MDN.

// so above is a way we use addEventListener. Now, we will try to understand why this is better. To understand this betterm we will use an 
// example. So lets go ahead and create our 4th button in HTML with an id : 'tas'
// After creating the button in html, lets create couple of functions as below :

function twist() {
    console.log("TWIST");
}

function shout() {
    console.log("SHOUT");
}

// Now, lets select our button :

const tasButton = document.querySelector('#tas');

// Now, lets use the onclick property method and assign above twist() method to this tasButton as below :

// tasButton.onclick = twist; // On clicking on this button we will get a console.log : "TWIST".

// Now, lets say we want a functionality where when we first click the button we get TWIST as above and then when we click the button again,
// we should get SHOUT. So we add another statement as below :

// tasButton.onclick = shout;

// Now, if you will observe in console, you will see that only function shout() is executing as the twist() function is getting overriden by
// shout() as it is written after twist().
// So the reason why this didn't worked is because above onclick is a property of object "tasButton" and when we assign twist value to it,
// and then assign shout value, its previous value is lost. So we can simply say that to a property we can assign only value.

// so to overcome this, we could use addEventListener() method.

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
// Now, above two statements are printing both TWIST and SHOUT in single click. So this can be useful when you want to perform more than
// one action in a single click.

// Another advantage of using addEventListener() is that it has mulitple options such as "once" "capture" etc. You can check them here
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//Example :

// tasButton.addEventListener('click', twist, {once : true}); // Now this will ensure that twist will be printed only once.

