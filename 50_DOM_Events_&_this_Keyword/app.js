// So in this section we are going to understand how "this" keyword does work in relation with Events. For this, we have created some 30-40 button with Click 
// text in them. Please check the HTML code for the same.

// Now, to understand this better, we are doing an example where if we click the button on screen, it gives a random background color to that button.

// Before we proceed further, lets recreate random colur generator function that we have used in previous project :

const makeRandColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// Now, lets get all the button we have created in our script :

const buttons = document.querySelectorAll('button');

// Then we will just simply loop over all the buttons selected and set an event listener to all of them :

// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         button.style.backgroundColor = makeRandColor();
//         // lets also modify the button text color on every click :
//         button.style.color = makeRandColor();
//     })
// }

// Similar to these buttons, we also see that we have few h1s available in our html page. Lets select those as well and set a random background when we click them

const h1s = document.querySelectorAll('h1');

// for (let h1 of h1s) {

//     h1.addEventListener('click', function() {
//         h1.style.backgroundColor = makeRandColor();
//         // Lets also change the h1 text colors on click :
//         h1.style.color = makeRandColor();
//     })
// }

// So if we see above code for both button as well as h1, we are doing kind of same thing inside addEventListener() method by modifying there styles(background color
// and text color). Similarly we could even have more lines of code that we want to run on a button click.

// So above is not an efficient approach. We should have some generic function designed that can be used for this repeated task. So for this, we will be creating 
// generic function which can then be called to modify styles as above.

// But main this to notice here is that how will this function know, for which button or h1 it has to change the color or style. So for this purpose, we are going
// to use this keyword. So that whichever button that calls this callback function inside addEventListener() method will get styles modifued, this keyword will 
// automatically refer it.

// So firstly, let's modify the above code :

// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         console.dir(this); // This will print the DOM object of the button which we have clicked
//         this.style.backgroundColor = makeRandColor();
//         // lets also modify the button text color on every click :
//         this.style.color = makeRandColor();
//     })
// }


// Similarly 

// for (let h1 of h1s) {

//     h1.addEventListener('click', function() {
//         console.dir(this);  // This will print the DOM object of the h1 which we click.
//         this.style.backgroundColor = makeRandColor();
//         // Lets also change the h1 text colors on click :
//         this.style.color = makeRandColor();
//     })
// }

// Now if we understand the above example that is using "this" keyword. We know that whenever a button is clicked, using addEventListener() method the callback
// method inside it is called. Now, when we use this inside that callback method, it will refer to the h1 ot buttom who called it. This is also the normal
// functionality of this keyword.

// Another advantage of using this keyword here is that we could create a generic function that can work for both button and h1 now :

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

for (let h1 of h1s) {

    h1.addEventListener('click', colorize)
}

// So we can see that using this keyword we were able to create a generic function that could be used with addEventListener method.