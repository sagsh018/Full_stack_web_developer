// So basically we are going to lear about two new event types which are "change" and "input".

// If you see our web page for our html, we will see one heading h1 and one input field of type text

// Now, consider we want to do something if the value of that input field gets changed. For this 
// we have two such event types : "change" and "input".

// Notice that we have studied events like "keydown" which also catpure the keys when pressed inside
// input field. However, with "keydown" event for example, the action will also happen if someone 
// presses shift. Now, shift does not make any changes the value of input field, but it will still
// be captured as an event.

// Also, when someone is using speach to text converstion to fill the value in input field, keydown 
// event will not capture the change. Similarly, there could be other ways as well to update the 
// input field. Therefore, we have to learn these two new events.

// So lets first consider using "change".

// To learn this, lets select the input field from our web page :

const input = document.querySelector('input');

// input.addEventListener('change', function(evt) {
//     console.log('Change happened');
// })

// This change event will capture all the changes that are made to the input field, but they will 
// only be recorded when you leave the input field by clicking outside it. Or we can say when input 
// field becomes blur.

// So change input is something like, you enter input field, made changes, and then leave the 
// input field. Now, after leaving if the value of input is different than what it was when you
// entered the input field, that will only be considered as a change.

// Suppose you want to capture the changes as they happen inside input field let say. Then, change
// event is something that cannot be used. Therefore, we can use another event type which is
// "input".

// Let's consider an example :

// input.addEventListener('input', function(evt) {
//     console.log('Input !')
// });

// Now this input event will capture any changes made to the input field. The changes could either
// by copy and pasting the text from clipbpard let say, or the text is updated using voice utility.
// Notice any other keypress is not trigerring this event. It only happens when there is a change
// inside this input text field.

// Now, lets do an example where we will update our h1 with the text field entered inside a text.

// lets first select the h1

const h1 = document.querySelector('h1');

input.addEventListener('input', function(evt){
    const enteredValue = input.value;
    h1.innerText = enteredValue;
});


// So now what ever you enter in the input field, the same will start appering in your h1 in real
// time.