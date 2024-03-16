// So here we are going to learn how to manipulate the CSS styles using DOM objects.
// Let's first select the h1 element object using query Selector as below :

const h1 = document.querySelector('h1');
console.dir(h1);

// Now, there is an attribute of h1 object called as "style". We can select that either directly or using getAttribute() method :

console.dir(h1.style);

// Now, this style chile object under h1 object is a massive object having lots and lots of attributes related tot style. One thing to note 
// about this object is that every CSS attribute here is named using Camel casing. Whereas in CSS style sheet we write something like 
// text-decorator. However, in this JS object we use camel casing to write it. See the examples using above console.dir statement in console.

// Now, there is one more important thing to note here. This style DOM chile object we have seen above does not actually represent the actual
// styles applied using CSS sheet. i.e. app.css file. Inface it will contain only the information about the styles that are applied inline 
// in the HTML file directly.

// For example, notice in our app.css style sheet how we have set the color of h1 element to  color: rgb(228, 146, 23); However, when you try
// to get the color property inside style object for this h1 element, you will find it empty :

// console.dir(h1.style.color); // Gives empty.

// This confirms that it does not contain style related informaition from app.css
// Now, lets go ahead and add the inline style for h1 element in html file :

// <h1 style="color: magenta;">Silkie Chickens</h1>
// Now lets again check the value of color attribute :

console.dir(h1.style.color); // This time it gave "magenta".

// So basically, this massive style object does contain only the inline styles informaton. However, we can still use the attributes of these
// styles to manipulate them, even though they are not defined in app.css file or inline in html like below :

h1.style.color = "green"; //This make the h1 green.

// Similarly we can change the font size of h1 as below :

h1.style.fontSize = '3em'; // This will increase the fond size of h1.

// Few things to notice here 
// 1. Notice how we have specified the fontSize in camel casing. Whereas in css style sheet we write it as font-size: 3em
// 2. Similarly notice how we have provided the new font size 3em as a string. Whereas in css style sheet we just write it directly as 3em

// another example :

h1.style.border = '2px solid black';

// Now lets consider another example of retreiving all the anchor tags and changing their color :

const alllinks = document.querySelectorAll('a');
console.dir(alllinks);

// Now, lets loop over all the links and change their color :

for (let link of alllinks) {
    link.style.color = "rgb(0, 108, 134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy"
}

// Please note, using above style object we are able to add styles, but all these are added as inline. You check the HTML code in inspect tools on browser and you
// find that the CSS styles are added inline instead of separate app.css
// So this is really not that helpful.

// Another problem with this is that using this style object we could not read the current value until we set one using style.fontSize as we did above. 
// For example, we could not read the fontSize of the h1. But now that we have set it inline above using h1.style.fontSize, we could read it as 3 em. But what 
// was it before we set we don't know.

// So to overcome these problems we do have something called as getComputedStyle() method under windos object, that retreive the styles of any element after the complete computation 
// of all CSS scripts attached with HTML code. As we know that we could have multiple styles sheets and at the end of the day these all style sheets might have
// confliting styles and also by the end of computation for display to user some styles may get overridden and some may not. So using getComputedStyle() method we 
// until end and let the complete computation finish and then retreive the values as below :

console.dir(window.getComputedStyle(h1));

// So this gives us an object that contains massive amount of style attributes and this time these attributes are not null.

console.log(window.getComputedStyle(h1).fontSize); // o/p: 48px
console.log(window.getComputedStyle(h1).color);

// So this time we are retreiving actual computed style values instead of the ones set inline using "h1.style.color".

console.log(window.getComputedStyle(h1).fontFamily); //Times

