// Here we are going to understand the methods under document object which are really useful in JS

// We are going to first start with methods that helps in selecting

// So when we talk about selecting, we mean single out may be one element or may be all elements of certain class just like we do in case 
// of CSS, where we apply styles to certain elements only by selecting them based on certain class or id.
// After selecting the specific element/s we can then manipulate them.

// Below are the selecting methods that we are going to see :

// getElementById
// getElementByTagName
// getElementByClassName

// getElementById
//===============

// getElementById is a method that exist on the document object and when you call it, we pass in a string and this string needs to
// corresponds to some id on an element. So if there is an element found with that id, it will be returned and if it can't found, then we get
// null.

// So we see the index.html file under this folder and check under <body></body> tag, we can see that "img" tag has an id=banner. Similarly
// for the content section created in index.html file there is an id=toc. So we will use these ids to select those elements of HTML page
// and we will try this in browser console.

const banner = document.getElementById('banner');
console.dir(banner)

// So that gave us the image element as an object and all the properties that are under that object, like image id that we have used (banner)
// its source URL and whole new set of properties that we can manipulate.
// Please note, by above selection procedure, we are not asking to give us the HTML , but the actual DOM object (which in this case is
// img object that is one of the leaf of main document object) that JavaScript created when we passed HTML+CSS to machine and getting all
// the object created for us.


// Lets for one more example as below :

const toc = document.getElementById('toc')
console.dir(toc);

// Output will be an DOM object that JS has created for us with lots of property which we will learn to manipulate.


// getElementsByTagName & getElementsByClassName
// =============================================

// Now, here we are grouping these two selecting methods as they deal with group of elements and not just a single element. So for example :
// Suppose we want to select all the elements of certain class or selcting all the elements that are anchor tags or img tags. Thats where 
// the use of these two methods come.

 // getElementsByTagName
 //=====================

 // So lets first try to select all images that are part of HTML page index.html

 const allImages = document.getElementsByTagName('img');
 console.dir(allImages);

// So getElementByTagName method return something we call HTMLCollection as below :
// HTMLCollection(4)
// 0
// : 
// img#banner
// 1
// : 
// img.square
// 2
// : 
// img.square
// 3
// : 
// img.square
// banner
// : 
// img#banner

// Please note, HTMLCollections does look like an array, but it is not an array. However, we can use array like syntax here. So lets say we
// try to get first image returned in above collections 

console.dir(allImages[0]);
// So this will show us the first image DOM object and this is how we can use array like sytax as all the object returned as part of collection
// has indices.

// As we know HTMLCollections are not arrays, so we cannot use methods such as map that we can use with array. However, we can use :

// length as below :

console.log(allImages.length);
// 4

// Similarly we can also use for..of loop as these collections iterable. so lets try to print the source url of all the images on our HTML
// page 

for (let img of allImages){
    console.log(img.src);
}

// Output :
// https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
// app.js:95 https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg
// app.js:95 https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png
// app.js:95 https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg

// So this is how we have looped over collections to print all the source URLS of images. We can also manipulate these URLs printed above
// like below :


// for (let img of allImages){
//     img.src = "https://some URL"
// }

// But we will see manipulating part later.

// Similarly we can also select other elements as below :

const allPara = document.getElementsByTagName('p');
console.dir(allImages);

const allDiv = document.getElementsByTagName('div');
console.log(allDiv);

const allAnchor = document.getElementsByTagName('a');
console.dir(allAnchor);

// Note :: HTMLcollection is nothing but a collection of element objects. Basically, element objects are part of most general base class
// named "Element" [1], from which all element objects in a Document [2] inherit
// [1] https://developer.mozilla.org/en-US/docs/Web/API/Element
// [2] https://developer.mozilla.org/en-US/docs/Web/API/Document

//getElementByClassName
//=====================

// So in our HTML code index.html, we have a class named "square". So lets try to select all elements with class named square.

const allSquareImages = document.getElementsByClassName('square');
console.dir(allSquareImages);

// This will again return an HTMLCollection with an array like structure containing element objects(DOM objects) which are images along
// with their properties.

// So can manipulate the properties of object returned in above HTMLCollection. For example, we can change the src URL of the image object
// element returned above as :

// for (let img of allSquareImages){
//     img.src = "Some other image URL";
// }

// NOTE :: If getElementsByTag and getElementsByClass is unable to find perticular tag name or class name, it returns an empty HTMLCollection.

// querySelector & querySelectorAll
// =================================

// A newer, all-in-one method to select a single element. Here, we can use this one method to select by id, or by class name, or by element
// type, or by attribute, or really any CSS style selector.

// Suppose we want to select by element name paragraph, we can do as below :

console.dir(document.querySelector('p'));
// Notice how it will only select one paraghraph that appears first in index.html. Wherease there are more than one paraghraph on this html page that we could
// check as below :

console.dir(document.getElementsByTagName('p')); // This gives all the paragraph tags available on HTML page as an HTMLCollection.

// Now, lets try to select using querySelector by id "banner" that we have also used in above example using getElementById() method :

console.dir(document.querySelector('#banner')); // Output :: img#banner
// Note how we are using # symbol same as the one we used while selecting to apply styles in CSS.

// Lets try to select by a class name : "square". Again notice how we are going to use CSS syntax :

console.dir(document.querySelector('.square')); // Output :: img.square

// Again notice that using above querySelector() method we are just selecting very first object with id banner and very first object with class name square. And
// there may be other such elements too.

// Now, suppose we try to get object with tag name img:

console.dir(document.querySelector('img'));

// Now this gives me very first img tag object. However, there are more that we can check using below :

console.dir(document.getElementsByTagName('img')); // Output : HTMLCollection(4). So total 4

// Suppose we want to select 2nd one using querySelector(). So we can chain on the CSS selector types as below :

console.dir(document.querySelector('img:nth-of-type(2)')); // Output :: img.square
// So we can see that with chaining on CSS selector we are able to get the second object with class name square which is also an img tag.

// Now, lets try to select using attribute :
// So we already have many anchor tags in our HTML and we will try to select the anchor tags that has an attribute named : title : "JAVA".

console.dir(document.querySelector('a[title="Silk"]')); // Here again we are using same syntax we use in CSS to select attribute 
// So with this we have selected an anchor tag with attribute title and its value as "Silk".

// Now, lets talk about querySelectorAll(). This is also a same idea, but returns a collection of matching elements.

// So now we if do as below for tag name "p" :

console.dir(document.querySelectorAll('p')); // NodeList(2) p,p

// So notice that this has returned all the paragraph tags that are available on our html page in again an array like strcuture which is called as : Nodelist

// Similarly we could get all the image tag object using below :

console.dir(document.querySelectorAll('img'));

// NodeList(4)
// 0
// : 
// img#banner
// 1
// : 
// img.square
// 2
// : 
// img.square
// 3
// : 
// img.square

// Now lets try to select all anchor tags that are nested inside of paragraphs :

console.dir(document.querySelectorAll('p a'));

// Output :

// NodeList(17)
// 0: a
// 1: a
// 2: a
// 3: a
// 4: a
// 5: a
// 6: a
// 7: a
// 8: a
// 9: a
// 10: a
// 11: a
// 12: a.mw-redirect
// 13: a
// 14: a
// 15: a
// 16: a

// So we can see that there were total 17 anchor tags that were inside of paragraphs.

// Now we can could also loop over these 17 to list all the href links as below :

const links = document.querySelectorAll('p a');

for (link of links) {
    console.log(link.href)
}

// Output 

// http://127.0.0.1:5500/wiki/List_of_chicken_breeds
// app.js:253 http://127.0.0.1:5500/wiki/Chicken
// app.js:253 http://127.0.0.1:5500/wiki/Plumage
// app.js:253 http://127.0.0.1:5500/wiki/Silk
// app.js:253 http://127.0.0.1:5500/wiki/Poultry
// app.js:253 http://127.0.0.1:5500/wiki/Broodiness
// app.js:253 http://127.0.0.1:5500/wiki/Southeast_Asia
// app.js:253 http://127.0.0.1:5500/wiki/Java
// app.js:253 http://127.0.0.1:5500/38_DOM_SELECTING/index.html#cite_note-Ekarius-2
// app.js:253 http://127.0.0.1:5500/wiki/Marco_Polo
// app.js:253 http://127.0.0.1:5500/38_DOM_SELECTING/index.html#cite_note-Graham-3
// app.js:253 http://127.0.0.1:5500/wiki/Ulisse_Aldrovandi
// app.js:253 http://127.0.0.1:5500/wiki/Naturalist
// app.js:253 http://127.0.0.1:5500/wiki/University_of_Bologna
// app.js:253 http://127.0.0.1:5500/wiki/Italy
// app.js:253 http://127.0.0.1:5500/wiki/Treatise
// app.js:253 http://127.0.0.1:5500/38_DOM_SELECTING/index.html#cite_note-4

// So we can see that we have looped over a nodelist (array like structure) returned using for--of loop and extracted all href links from the all anchor tag 
// objects inside of paragraph

// So as we have used multiple CSS selector types with querySelectorAll and querySelector above, we could use other CSS selectors like decendant selectors, 
// adjuscent selectors, class selectors that we have already seen above

