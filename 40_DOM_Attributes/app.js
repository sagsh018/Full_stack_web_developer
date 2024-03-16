// So here we are going to discuss about two new methods under DOM named as "getAttribute() and setAttribute()"
// So as we know that the objects we extract using for example querySelector or querySelectorAll does have lots and lots of attributes like href, id, class, etc.
// We could use these two methods to get and set these attributes.

// To understand it better, lets add a new tag named "input" in our html and set its attribute "type" as text, at the end of our html doc. Please check the input tag added 
// at the end.

// Now, lets try to select the very first image of our html page which has am ID as "banner"

const  firstImg = document.querySelector("#banner");
console.dir(firstImg);

// Now, if you observe above selected image tag, it has an attribute named id. Which is nothing but set to "banner". 

console.dir(firstImg.id); // o/p:- banner

// We could now change this id from value of banner to something else as below :

// firstImg.id = "whoops"
// This will change my id from original value of "banner" to new value whoops. We have commented this line otherwise all the styles that are set to banner id will be lost.

// Similarly, we do have another attribute for the img object we have selected using querySelector above which is "src".

console.dir(firstImg.src);

// and we can also change to to some other source URL.

// Now lets select an anchor tag as an object using querySelector as below :

const anchor = document.querySelector("a");
console.dir(anchor);

// So above selected anchor tag will have couple of attributes such as href and title. We can select them as below :

console.log(anchor.href);
console.log(anchor.title);

// So till now we have tried accessing the attributes directly using dot method as above. Now, we will try to use our methods such as getAttribute() and 
// setAttribute() to do the same :

// So as we have seen above that we were able to retrieve the href attribute as :

console.log(anchor.href);
// o/p : http://127.0.0.1:5500/wiki/List_of_chicken_breeds

// Now lets try to retreive it using getAttribute() method :

console.log(anchor.getAttribute('href'));
// o/p : /wiki/List_of_chicken_breeds
// so we can see the difference between both the outputs. The reason is that using "anchor.href" we are getting back the value from JavaScript anchor tag "a" 
// object. whereas when we are retreiving it using getAttribute() method, we are getting it from how it is defined in HTML document. Like this : <a href="/wiki/List_of_chicken_breeds

// Similarly we can retrieve other attributes as well :

console.log(anchor.getAttribute('title'));
// o/p : List of chicken breeds

// Similarly we could also use setAttribute() method to change the value of an attribute as below :

anchor.setAttribute('title', 'This is updated');
console.log(anchor.getAttribute('title'));
// o/p: This is updated

// Now as we have added a new HTML tag "input" at the end of our html doc, we can select it using below querySelector method :

const input = document.querySelector("input[type='text']");
console.log(input);

// Now that we have an access to this input object, we can access all sorts of attributes inside it. 

console.log(input.type); // o/p : text
console.log(input.getAttribute('type')); // same output as above
console.log(input.type = 'password'); // This will set the type of our input from text to password

// Similar to getAttribute(), we can use setAttribute() to set it back to text

input.setAttribute('type', 'text');
console.log(input.getAttribute('type')); // o/p : again text.