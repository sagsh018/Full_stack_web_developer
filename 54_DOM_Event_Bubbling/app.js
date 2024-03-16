// So we are going to study about Event bubbling.

// Let's consider the index.html file, where we have created a Section, a paragraph and a button. If we notice we have created button
// nested inside a paragraph, which itself is nested inside a section. We have also assigned it some inline onclick event listener
// These inline event listeners are just for demo and shouldn't be used.

// Now, if we click on button, we will see three alerts 
// -> Button Clicked !
//      -> Paragraph Clicked !
//          -> Section Clicked !

// So we can see that the event first triggered due to button, but since it was nested inside of para, paragraph event also got 
// triggered. Because of para, the event inside to section then got triggered. This shows that the event bubbled all the way 
// from bottom most button to the top section. This is called as event bubbling.

// Let's consider another example for this. We have created a div with id : "container", and a button with id : "changeColor" inside it.
// See the index.html file.

// Now let's select both the div and button using their ids :

const container = document.querySelector('#container');
const button = document.querySelector('#changeColor');

// Now, let's create that color generator function again, using which we will assign random color to the div on button click.

const randomColorGenerator = function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

// Now, lets call this function inside our event listener and assign it to container we have selected above :

// button.addEventListener('click', function() {
//     container.style.backgroundColor = randomColorGenerator();
// });

// So we can clearly see that button event listener is successfully applying the random color to our container. Now, let say we 
// also add an event listener on our container as below :

// Before we add the new event listener to our container, check our the app.css file where we have added a new css class named "hide".
// now according to this hide class we will hide the container itself. And we will now attach this class to container using event
// listener.

container.addEventListener('click', function() {
    container.classList.toggle('hide');
});

// Now using above event listener on container we are able to hide the div when we click on text "Click to hide". This is expected.
// Problem arise when you click on button and because of event bubbling, the event that got triggered for button click action rise 
// upto container and also trigger container event of hide.

// So with this, when you click on botton on your web page, it will assign the random color to div and immediately hide it because
// of this event bubbling.

// Now, this is similar to a default behavior of html forms, which get submitted to different location based on action attribute.
// So to overcome this behavior we will using something called as stopPropagation() function which comes as part of event object.
// See below :

button.addEventListener('click', function(evt) {
    container.style.backgroundColor = randomColorGenerator();
    evt.stopPropagation();
});

// So with this, now when you click on button, it will only change color based on its event and it will not bubble up. When you click
// container text, it will hide the div.
