// So as we have seen in case of inline events there were many dis ad and it is not recommended approach. Hence, we are now going to look at second way of creating
// events using properties for event (for example : Onclick) in the DOM object.

// To understand the usage of this onclick property, we will create another button with id of v2.

// Now, lets select this second button using our querySelector method:

const btn = document.querySelector('#v2');
console.dir(btn)

// If we inspect the output of above console.dir statement in console, we will find that there are whole lot of property that all start with on and onclick is 
// also one such property for this btn object. Similarly, you will also see ondblclick property, etc.
// Please note, currently all these property are set to null.

// So now we will set an event by setting these property to a function that will execute JS code for us whenever there will be an event happen.

// So let's set the onclick property itself for this example to a JS function as below :

btn.onclick = function() {
    console.log("Version 2 clicked");
    console.log("Hope it worked");
}

// So when you will click the second button of your HTML page, because of its onclick property set to above function, this function will execute and run statements
// written inside of it.

// NOTE : We are just setting the property onclick equal to function above and not executing the function maunally. It will automatically run when event happens.
// You can also do this with separately writing the function first and then assigning it to onclick property as below :

// function func() {
//     console.log("Version 2 clicked");
//     console.log("Hope it worked");
// }

// btn.onclick = func;

// Notice how we are just setting onclick property to the function name and not adding () in front of function name, because we do not want to execute here. Instead
// we want it to execute onclick event.

// Lets consider another property named "onmouseenter" where if the mouse(any pointing device) so that its hotspot is within the element at which the element 
// was fired.

// So lets first design the function

function scream () {
    console.log("AAAAHHHHHHH !")
    console.log("Stop and click me !");
}

btn.onmouseenter = scream;

const scream2 = () => console.log("Why leaving, click me !");

btn.onmouseleave = scream2;

// We could have written it in single line like below :

// btn.onmouseleave = () => console.log("Why leaving, click me !");

// NOTE : Our first button where we have set the onclick HTML property inline in the index.html. If we check that button DOM object :

console.dir(document.querySelector('button').onclick);

// You will notice that with this inline method also, the onclick property is set to function like the way we set above using onclick property in DOM object.
// However, this approace of inline is not followed as it is not efficient. 

// Note that we have seen above examples only for buttons. But we could also do it for other HTML elements like h1 in our index.html page :

document.querySelector('h1').onclick = () => {
    console.log("You click the heading");
}