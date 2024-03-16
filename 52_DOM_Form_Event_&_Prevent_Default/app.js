// So in this session we are going to talk about form events. Specifically what happens when we submit a form by default and how we can prevent that behavior.
// So to understand this better, let's create a new html page and have our example form in there :

// So if you look at the html page, we see that the form is created with action /shelter. Now, if you go to browser and refresh the page, you will see the h1
// heading on page and a form with an input field and a button to submit with following URL in address bar of the page : http://127.0.0.1:5500/52_DOM_Form_Event_&_Prevent_Default/index.html

// Now, once you enter something to the input field and press submit, the form will be submitted and the URL will change to : http://127.0.0.1:5500/shelter?
// Also, we will not longer be seeing the form web page on browser.
// So this is a default behavior of HTML forms.

// This default behavior is useful when we actually wants to submit something and we do have the endpoint already created (for example /shelter in above example)
// However, there are times when we do not want to have this default behavior. For example, suppose that we haven't created the endpoint for /shelter
// because of default behavior the form will be submitted and return an error as in above example.
// Sometimes we just want to be on the same web page after submitting the form and prevent it from performing the default action.

// This can be done using a method under an event object called "preventDefault()"

// So let's go ahead and select our form in our script :

const form = document.querySelector('#shelterForm');

// form.addEventListener('submit', function(evt) {
//     console.log("Submitted !")
// });

// Now, if you try to notice on our web page, when we submit a form, for a very short duration you will see this message on the console said "Submitted !" and 
// then the page changes to destination where form gets submitted /shelter.

// So we can see that because of the default behavior of this form submission, it is moving to the /shelter and does not remain on the same page to show "submitted".
// So this default functionality is sometime not required. So to overcome this default behavior of form at such places, we will use "preventDefault()" method :

// form.addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     console.log("Submitted the form !")
// });

// Note that this preventDefault() is not specific to only the "submit" event. It can be applied on any event to prevent default action.
// So now when we click on submit button of our form in browser, it will submit the form and prevent the default submittion action and remain on the same page.

// So now that we are able to prevent the default action of our form, we will try to extract the value that was filled in the form and submitted and try to may
// be list it on the same form page below. As we are not able to stay on the same page and it is not more refreshing on submission, we can kind of just extract the
// entered in the input field and display as <li></li> under unordered list.

// Lets consider this example and create a functionality :

// For this, firstly we will create an h2 heading in our html page and then add the <ul></ul> with an id, so that we can then extract the value submitted and
// add that value as li under this unordered list.  See the index.html

// As part of this example, we will firstly try to select the entered text in input field using querySelecter and a property in input DOM object :
// So lets go ahead and add an id to the input tag in html file and select that :

const input = document.querySelector('#catNames');

// Now that we have selected the input DOM object, we are going to use the property inside it called as "value"
// So we can access this property using "input.value" when the submission happens. Also, using this property we can assign some text to this value property and
// it will show in the input text field.

// But currently our goal is to take that input.value and display it on the same page under unordered list down there and also clear the input field afterwards.

// Lets also select the unordered list element using querySelector and then we will write up our add event listener code :

const list = document.querySelector('#cats');

form.addEventListener('submit', function(evt) {
    // Firstly prevent the defualt action:
    evt.preventDefault();
    // Now, lets print the value submitted in the input field :
    console.log(input.value);
    // Now, we will create a new LI empty element :
    const newLI = document.createElement("LI");
    // Now, lets save the input.value to some variable which we will add to this new LI element :
    const catName = input.value;
    // Now, lets add this catName to the LI
    newLI.innerText = catName;
    // lets print it for testing :
    console.log(newLI); // o/p : <li>asdas</li>, so that means the value is added to the li.
    // Now that we have added the input.value to li already, we will now append this to unordered list we have selected above using querySelector as below :
    list.append(newLI);
    // finally, we also set the input text field back to empty
    input.value = "";
});


const newForm = document.querySelector('#newForm');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');

const groceryList = document.querySelector('#list');

newForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const productName = product.value;
    const quantityValue = quantity.value;
    const listEntry = `${quantityValue} ${productName}`;
    const groceryLI = document.createElement('LI');
    groceryLI.innerText = listEntry;
    groceryList.appendChild(groceryLI);
    product.value = "";
    quantity.value = "";
})
