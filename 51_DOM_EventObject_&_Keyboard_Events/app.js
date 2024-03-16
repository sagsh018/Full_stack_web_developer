// So here we are going to learn two related things that are event object and keyboard events.

// Let's first have a look at Event Object.

// To understand this, we have created a button on html document. Let's select it and add an event listener in our script :

// document.querySelector('button').addEventListener('click', function () {
//     alert('Clicked !');
// })

// Now, there is this thing called Event object that is automatically passed in to our callback function above inside the addEventListener() method. We are not
// using it or capturing it above, as we do not have any parameter to capture it inside the callback function. However, it is automatically passed in every single
// time.

// So lets try and capture that event as below :

document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
    alert('Clicked !');
})

// O/p : PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

// So we got this event object generated and passed into callback function above which is for mouse click. If you check that above object you will find 
// parameters such as clientX and clientY, which tells in window where exactly I clicked. So these are just the coordinates. Along with that, you get other
// properties as well. For example : type of event which in above case is "click".

// So we could use this event object to perform some action based on let say where exactly the click happen on page. 

// We have to often reply on these event object more, when we work with keyboard events. This is because we always want to know which key was pressed and that
// information will always be present inside this event object.

// So now lets try to understand the keyboard events. Note : we can listen for keyboard on the entire window of screen. To understand this, let's create a 
// input of type text in our html file :

// After creating the input lets select it in our script :

const input = document.querySelector('input');

// input.addEventListener('keydown', () => {
//     console.log('KEYDOWN')
// });

// lets also keyup event as well :

input.addEventListener('keyup', () => {
    console.log('KEYUP')
});

// One thing to note here is that by keyup and keydown event we are not just counting the keypress when we are tying in out input field. These events are even 
// counting our up arrow, down arrow, or space or enter or we can say any sort of key on your keyboard, provided that we are inside that input text area.
// That means if we have our cursor inside the input field than every keypress will be counted.

// Now most of the time we want to know which key was pressed. This is where our event object comes into play. So let's consider our keydown event again :

// input.addEventListener('keydown', (evt) => {
//     console.log(evt);
//     console.log('KEYDOWN')
// });

// This will give us the following keyboard event : KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …}
// Now from this object, the two properties that we can use are "code" and "key". So let's print these two properties instead of entire evt object

input.addEventListener('keydown', (evt) => {
    console.log('KEYDOWN');
    console.log(evt.code);
    console.log(evt.key);
})

// o/p : KeyD(code) d(key) when we pressed 'd'.

// Similarly when we press space : o/p : 'Space'(code) and ' '(key). So we can clearly see that the key was actually presented with the space on console.

// Now lets consider another example : lets press space : This results into : ShiftLeft(code) and Shift(Key), now this is because I have pressed the left shift 
// on my keyboard. Similarly if I will press right shift on keyboard the code is ShiftRight and Key is Shift.

// From above examples we can say that if we want to know what letter was actually typed, we can use the "key" property of event object and if we want to know 
// which key was pressed on the keyboard for example a left shift or a right shift then we make use of "Code" property. Please note, the code always remain same.
// For example, on an English keyboard when I press letter q, the Key property is q and Code property will be KeyQ. 

// Now, there is a possibility that some other person is using a different language keyboard and not the english, so letter q will be represented with something
// else. Therefore, in such cases the "Key" property value will change but the "Code" will still remain same. That is where the Code property comes in.

// Now, in above example we have seen the keyup and keydown events onlye when our cursor was inside the input text field. But we often come across the scenario
// where we want to listen to keyboard event anywhere on the screen. For example, while playing the game we want the keyboard event to be listened anywhere on the
// the entire screen or window. 

// So for such scenario we use "window" object and listen event onto it :

window.addEventListener('keydown', (evt) => {
    console.log(evt.code)
});

// we can also make a switch statement for let say whatever arrow key is pressed while playing a game :

window.addEventListener('keydown', (evt) => {
    switch (evt.code) {
        case 'ArrowUp' :
            console.log('Up!');
            break;
        case 'ArrowDown':
            console.log('Down!');
            break;
        case 'ArrowLeft':
            console.log('Left!');
            break;
        case 'ArrowRight':
            console.log('Right!');
            break;
        default:
            break;
    }
})