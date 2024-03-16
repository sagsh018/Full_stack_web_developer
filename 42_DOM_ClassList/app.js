// As we have seen in previous section that we can add inline styles using DOM_OBJECT.style attribute. However, it is inefficient way to 
// manipulating styles, if we have lot of styles to set at once.

// Therefore, in this section we will checkout a better option to create a class in CSS and then apply that class to element in HTML 

// To understand this better, lets create two classes in app.css file named as "purple" and "border". Note that in real world application it
// it is really importand to apply classes when we use events. For example apply certain class to an element on an event by attaching a class
// using JS.

// So now that we have created two classes as mentioned above in our app.css file, lets go ahead and select the element 'h2' from our
// html and try attaching class to it.

// First lets select h2 :

const h2 = document.querySelector('h2');

// now that we have selected h2, lets check if h2 has any attribute named class set to it :

console.log(h2.getAttribute('class')); // o/p : null

// Now we will try to set the attribute using setAttribute for this h2 :

h2.setAttribute('class', 'purple'); // check the html page on browser the h2 "content" has purple color.
console.log(h2.getAttribute('class')); // purple

// So we have just seen how to apply a class to html element. Now, lets try to apply another class that we have created named as "border"

h2.setAttribute('class', 'border'); // Check out that h2 "content" now has a border. However, notice that its purple color is gone.
console.log(h2.getAttribute('class')); // o/p only border

// So we can see from above that setting individual class to an object will remove the previous applied class. So we can do something like
// below :

const currentClass = h2.setAttribute('class', 'purple');
h2.setAttribute('class', `${currentClass} border`); // This will apply both the classes to h2. But this is not a ideal way to go with.

// So we are going to learn property/object called as "classList". This is an object in DOM that we can use to control the classes applied
// to an element and also to retreive them and manipulate them.

// So understand it with example, we will select another heading defined in our html which is h3 :

const h3 = document.querySelector('h3');

// Now, if I check the classList property on this h3 object :

console.log(h3.classList); // o/p :  [value: ''] --> Empty. 
// This means currently there is not class added to this class list.

// Now, we will use a method under this classList property that will add the classes to this h3 classList :

h3.classList.add('purple'); // Check in out html page and you will see purple class applied to h3 object

// Now, lets try to add another class to this h3 class list :

h3.classList.add('border'); // You will see that both the classes are added one after the other and this has also not removed previous class
// when tried added second once.

// We can also remove the classes using remove() method :

h3.classList.remove('border');

// There is also a method named "contains()" that can be used to check whether class is added to classList of this object or not :

console.log(h3.classList.contains('border')); // false
console.log(h3.classList.contains('purple')); // true

// Another method that we can know here is called "toggle()". This method just turn on and off the class in the classList :

console.log(h3.classList.toggle('purple')); // return false and it also turned off the class purple that was already appled to h3.
// if we run this again, it will return true and apply the class back to h3 again :

console.log(h3.classList.toggle('purple')); // true

// This toggle method is used in case when you want to apply certain styles using class on specific actions over web page. For example, let
// say you want to enable certain styles only when you hover over to an element or expand an element etc.

h3.classList.add('border'); 
console.log(h3.getAttribute('class')); // purple border
