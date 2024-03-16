// In this section we are going to cover how to create new elements from scrtch and then appending them to page or pre-pending it, removing elements, etc.

// Lets start our discussion with how to create new DOM element :

// So in JavaScript we could use : "Document.createElement()" method to create a new DOM object : https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// Inside this createElement, I will have to pass in type of element I want to create :

// example :

const newImg = document.createElement('img');

console.dir(newImg);

// Now, this has created for me a new empty object "img"(with lot of empty properties) and without any source or actual image on my web page.

// Therefore, we will now have to add a src for this imave :

newImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';

console.log(newImg.src);

// Now that we have populated this image src property, we can append this to our web page using either of two ways : append(), or appendChild().

// So first we are going to see how to use appendChild(). For this, we will first select the object on web page with which we want to append this newImg to :
// So let say we have selected body :

document.body.appendChild(newImg); // So this has appended newImg as a new element or new node to this DOM object and to our web page.

// Lets add one more element let say an h4 at the end again of this web page body :

const newH4 = document.createElement('h4');
console.dir(newH4);// empty h4 element
newH4.innerText = "I am New !";
document.body.appendChild(newH4); // This has added a new object/node to our DOM or a new tag into our webpage.

// Now another way to append an element is to use "append()" method. This is a newer method and using this we can append more than one element/node. Also, this
// is more flexible.

// For example, you could also append a direct text to let say a paragraph text like below :

const para = document.querySelector('p');
para.append('I am new TEXT YAAAYYYYY');

console.log(para.innerText); // You will notice that at the very end we have appended a text given above directly using append(). So this is something that is
// not possible with appendChild() as it only helps in appending DOM node and not a text.

// Similarly, we could append more than one things at a time :

para.append('This again a new text', 'And again a very new');

console.log(para.innerText); // You can see the changes.

// Now, suppose we want to insert or append something as a very beginning or as a first child of an object, we could use prepend().

// For example, let say we want to add new bold text in front of first para.

const newBold = document.createElement('b');
newBold.innerText = "Hello !! "; // Please note, another way of adding text to this newly created bold tag is by : neWBold.append(). This will ultimately add
// new text to it.

// now since we want this at the start of para, we can do :

para.prepend(newBold);

console.log(para.innerText); // You can see the changes.

// Another requirement could let say we want to insert some element as adjuscent to some element. Note, this will not be at the end or beginning. It will be 
// adjacent.

// For example, we want to insert a new h2 element between first h1 and an image. This is where insertAdjacentElement() method comes handy.

// insertAdjacentElement() : The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the 
// element it is invoked upon. Syntax : insertAdjacentElement(position, element)

// position ::

// A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

// element ::

// The element to be inserted into the tree.

// So now lets create and insert our new h2 element.

const newh2 = document.createElement('h2');
console.dir(newh2); // empty dom object
newh2.innerText = 'I am a new h2 inserted adjacent to first h1';

// Now lets insert it :

// firstly using "afterend" position :

// lets choose the target element :

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', newh2);
// This has inserted h2 adjacent to h1.

// There are also methods called after() and before(). These insert element before and after the target element :

// for example lets create another h3 

const h3 = document.createElement('h3');
h3.innerText = "I am h3";
newh2.after(h3);

// Similar to this we could also use before(). But the alternative to all these is "insertAdjacentElement".