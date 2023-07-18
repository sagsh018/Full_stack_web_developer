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

// So we see the inddex.html file under this folder and check under <body></body> tag, we can see that "img" tag has an id=banner. Similarly
// for the content section created in index.html file there is an id=toc. So we will use these ids to select those elements of HTML page
// and we will try this in browser console.

const banner = document.getElementById('banner');
console.dir(banner)

// So that gave us the image element as an object and all the properties that are under that object, like image id that we have used (banner)
// its source URL and whole new set of properties that we can manipulate.
// Please note, by above selection procedure, we are not asking to give us the HTML , but the actual DOM object (which in this case is
// img object that us one of the leaf of main document object) that JavaScript created when we passed HTML+CSS to machine and getting all
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

 // getElementByTagName
 //===================

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

// NOTE :: If getElementsByTag and getElementsByClass is unable to find perticular tag name of class name, it returns an empty HTMLCollection.

