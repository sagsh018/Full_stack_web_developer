// So here we are going to learn about remove() and removeChild() method.

// So the original and older method is removeChild().
// In this we actully does not remove perticular element, but remove a child of an element. So we will have to call this method on the parent of element which we
// want to remove and then pass that element to that called function.

// for example in our html file, we have a first image which is inside body element directly. If we want to remove it, we cannot directly call this removeChild()
// method on img tag, instead you will have to call it on parent(which in this case is body) and then pass img inside this method.

// lets look by example. Lets select very first <li></li> on our web page :

const firstLi = document.querySelector('li');
console.dir(firstLi);

// Now, if we want to remove this li, I cannot call removeChild() method on this directly. Instead I will have to call this on the parent of it. So lets first 
// get its parent :

const parent = firstLi.parentElement;
console.dir(parent); // o/p : ul

// Now, lets call removeChild():

parent.removeChild(firstLi); // You can notice on web page that first li is gone because of this.

// we could also do all this in a single line as below :

const b = document.querySelector('b');
b.parentElement.removeChild(b); // This will remove the first bold tag.

// However, this still not the most efficient way of doing it. Therefore, we came across a new method called remove().

// Notice remove() method can be directly called upon the element which we want to remove.
// So let say we want to remove very first image. So we just select it and call remove() on it directly :

document.querySelector('img').remove(); // and the image is gone. So it is pretty much simple and make lot more sense. However, this is not supported in IE.