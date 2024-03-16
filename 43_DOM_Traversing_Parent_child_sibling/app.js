// So here we are going to look at few more properties like nextSibling, previousSibling, parentElement, children from a given element. These proterties help
// in moving from one element to some relative. For example, its parent, or its parent's parent.

// So from our HTML file lets select the first bold tag which is inside first paragraph tag :

firstBold = document.querySelector('b');
console.dir(firstBold);

// Now, we already know from our HTML file that the parent of this first bold tag is paragraph <p></p>. Now, to find it using JavaScript DOM objects we can do

console.dir(firstBold.parentElement); // o/p : p 

// Similarly, we again add one more parentElement in front of above, it will give me the parent of p :

console.dir(firstBold.parentElement.parentElement); // o/p : body

// again if we add one more :

console.dir(firstBold.parentElement.parentElement.parentElement); // o/p : html tag

// So this is how we can move up a level to parent, then to its parent, then to its parent and so on.
// This could be useful when let say user click a button and you want some changes to be applied to its parent when user click the button.

// Now, lets see how we can move down a level using children property. Please note, like we know, every element can have only one direct parent element. However,
// an element can have multiple child element. Because of this, we do not have simple child property and instead have "children".

// Now, lets select first paraghraph :

const para = document.querySelector('p');
// we can find the total number of children for this paragraph element using :

console.log(para.childElementCount); // o/p : 8

// So we can see that paraghraph element has 8 chilren.

// Now, if we try to see what all children does p element have :

console.log(para.children); // o/p : [b, b, a, a, a, a, a, a] It gives again an HTMLCollection which looks like an array but does not have all method that we apply
// to an array. However, it has indices and hanve it is iterable using for..of loop for example.

// we can get the very first child as below :

console.log(para.children[0]); // <b>Silkie</b> object

// Next properties that we are going to see will be nextSibling and previousSibling.

// to understand this, lets select first image(having class square) from our html page :

const squareImg = document.querySelector('.square');
console.dir(squareImg);
console.log(squareImg.parentElement); // body, as these images are directly placed under the body tag
console.log(squareImg.children); // empty HTMLCollection as no children for this image.

// Now, lets more further and understand sibling part :

console.dir(squareImg.nextSibling);  // #text is an output.
// As were expecting it to give the next sibling image tag on HTML page, it has given some text object. If you inspect this #text object in borwser console,
// you will notice that the only data it has is : "data: "\n    "". That means this is nothing bit a next line. Please note, browsers add a new line or tab or
// spaces and nextSibling present it with #text object.

// Similarly, if you will try previousSibling, you will again get a #text object for a next line added just above this image.

console.log(squareImg.previousSibling); // #text

// So instead of these nextSibling and previousSibling we use "nextElementSibling" and "previousElementSibling".

console.log(squareImg.nextElementSibling); // This has given as an out the next adjuscent image which was expected.

// similarly :

console.dir(squareImg.previousElementSibling);  // given previous adjuscent element <p></p>

// NOTE : these #text objects that you have received above using nextSibling and previousSibling are called as DOM nodes.