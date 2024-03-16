// So here we are going to see how to manipulate the objects that we have selected using DOM Manipulating methods.
// We will learn how to use JavaScript to impact HTML and CSS that a user sees

// As we know that each object under DOM have lots and lots of properties that we can work with. However, we will learn the mostly used properties and methods as
// listed below :

// Methods
//=========

// classList
// getAttribute()
// setAttribute()
// appendChild()
// append()
// prepend()
// removeChild()
// remove()
// createElement

// Properties
//===========

// innerText
// textContent
// innerHTML
// value
// parentElement
// children
// nextSibling
// previousSibling
// style

// So now we are going to start with few related properties such as innerText, innerHTML and TextContent.

// Now, suppose we select h1 tag from our HTML using querySelector as below :

const h1 = document.querySelector('h1');

console.dir(h1);

console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.textContent);

// Notice it just going to give us the first h1 element object from our HTML code.

// Now, if we inspect this h1 object that we have selected above using querySelector, we can see that there are tons of properties related to this object.

// However, we are currently integrated in below mentioned properties :

// innerHTML: "Silkie Chickens"
// innerText: "Silkie Chickens"
// textContent: "Silkie Chickens"

// So from above, we can tell that all these three properties have something to do with stuff inside of opening and closing tag of an element, which in this case
// h1. So basically we are dealoing with content between opening and closing tags of h1.

// Similarly, lets try to select first paraghraph from our html page :

const para = document.querySelector('p');

console.dir(para);

console.log(para.innerHTML);
console.log(para.innerText);
console.log(para.textContent);

// This will give innerHTML, innerText and textContent something like below :

/*
innerHTML: "The <b>Silkie</b> (sometimes spelled <b>Silky</b>) is a <a href=\"/wiki/List_of_chicken_breeds\" title=\"List of chicken breeds\">breed</a> of <a href=\"/wiki/Chicken\" title=\"Chicken\">chicken</a> named for\n        its atypically fluffy <a href=\"/wiki/Plumage\" title=\"Plumage\">plumage</a>, which is said to feel like <a href=\"/wiki/Silk\" title=\"Silk\">silk</a> and satin. The breed has several other unusual qualities, such as\n        black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are\n        often exhibited in <a href=\"/wiki/Poultry\" title=\"Poultry\">poultry</a> shows, and appear in various colors. In\n        addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly\n        temperament. It is among the most docile of poultry. Hens are also exceptionally <a href=\"/wiki/Broodiness\" title=\"Broodiness\">broody</a>, and care for young well. Though they are fair layers themselves, laying only\n        about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their\n        broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet,\n        should be handled with care.\n        \n    "


innerText: "The Silkie (sometimes spelled Silky) is a breed of chicken named for its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are often exhibited in poultry shows, and appear in various colors. In addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet, should be handled with care."


textContent: "The Silkie (sometimes spelled Silky) is a breed of chicken named for\n        its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as\n        black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are\n        often exhibited in poultry shows, and appear in various colors. In\n        addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly\n        temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only\n        about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their\n        broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet,\n        should be handled with care.\n        \n    "
*/

// Now that we have selected the innerText as above, we could just manipulate it using simple statement below :

/*
 Just for sake of example
para.innerText = 'lololol';

console.log(para.innerText); // Output : lololol
*/

// So we have simply manipulated a paragraph content using DOM manipulation.

// Now, we will try to see the differences between these three innerText, innerHTML and textContent properties.

// Below is the output of innerText :

console.log(para.innerText);

// Please see the image attached here [IMAGE] 2023-09-04-09-02-25.png

// Now lets consider textContent as below :

console.log(para.textContent);

// please see the image attached here [IMAGE] 2023-09-04-09-27-35.png

// Now, if we observe both the images above for innerText and textContent, we can see that the words of paragraph in both are exactly same. What is different,
// is that in case of textContent, we have weird line breaks and spaces. Please note that these line breaks and spacing does not comes from the HTML code that
// we see in our browser. It is actually comming from our HTML markup document. So, textContent shows the stuff inside tag, how it is written in your markup
// document and innerText represent how it is shown on browser.

// another difference between innerText and textContent is that, since textContent shows the content from your markup HTML doc, it gets the content of all 
// elements, including <script></script> or <style></style> elements. In contrast, innerText only shows human-readable element.

// another difference is that textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of hidden 
// elements

// For example, suppose inside paraghraph content, we take the bold tag that dsiplays Silkie as bold and set the style on it by setting display as none :

// <b style="display: none;">Silkie</b>

// Now, textContent will still show this, however, innerText will understand the style and taking it into consideration will not represent this hidden text.

// So finally, we can say that textContent does gives us everything, whereas innerText is sensitive to what is is showing at the moment and if it is showing up 
// at all. However, we could use both to manipulate the content.

// Now, lets try to manipulate all the links (anchor tags) of our html page as below :

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = "Hey I am a Link !!!"
}

// So as we can see that we have just altered their text. However, if there would be any stuff inside of these anchor tags, let say a bold tag inside an anchor
// tag. Then with above method of altering the innerText, we are overriding everything.

// Suppose we want to italicise our heading h1 :

// const italicHeading = document.querySelector('h1').innerText = '<i>New Heading</i>';
// console.log(italicHeading);

// Output : <i>New Heading</i>
// We can clearly see that italic tag didn't worked. The reason is that innerText is just setting a text and not treating it as html, even though it is
// looking like an HTML.

// This brings us to our next property "innerHTML"

// So, innerHTML gives us the entirety of markup contained within some markup. This property gets or sets the HTML markup contained within the element.

// Lets try to use innerText and innerHTML both on our heading again :

const headingOne = document.querySelector('h1').innerText;

const headingTwo = document.querySelector('h1').innerHTML;

console.log(headingOne);

console.log(headingTwo);

// Output

/*

Silkie Chickens
Silkie Chickens

*/

// We can see that output for both innerText and innerHTML are same. However, if we are dealing with some HTML element which also has inner html tags. Such as
// paragraph on our HTML page has lot of other tags. Lets try to print both innerText and innerHTML of paragraph:

console.log(document.querySelector('p').innerText);

// output : just printed the text. see the attached screenshot
// [IMAGE] 2023-09-11-20-00-37.png

// lets use innerHTML now :

console.log(document.querySelector('p').innerHTML);

// output : printed all the tags as well
// see the screenshot attached :
// [IMAGE] 2023-09-11-20-02-18.png

// So innerHTML is used when we want to see the HTML element available within an element and want to manipulate them. Now, suppose we try to make the heading
// italic now :

document.querySelector('h1').innerHTML = '<i>New Heading in ITALICS</i>'

// heading changed on web page to : New Heading in ITALICS. So when using innerHTML, browser will know that you want to actually use this html tag and it will update the web page.

