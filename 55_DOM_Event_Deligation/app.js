// Here we are going to see another important topic under events which is called as
// event deligation.

// To understand this example, check out the index.html file where we have created
// a form and inside form we have created two input fields and a button 
// then we have also created an unordered list to append the tweets that user 
// will add in the form above.

// lets go ahead and create the functinality of it now :

const form = document.querySelector('form');
const username = document.querySelector('#username');
const tweet = document.querySelector('#tweet');
const list = document.querySelector('#tweets');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const newUserName = username.value;
    const newTweet = tweet.value;
    const completeTweet = `${newUserName} ${newTweet}`;
    const newLI = document.createElement("LI");
    newLI.innerText = completeTweet;
    list.append(newLI);
    username.value = "";
    tweet.value = "";                                                                               
});

// Now using above event listener we are able to add a new tweet that is entered by user of this form. Now, let suppose we have
// added a wrong tweet and we want to delete/remove it.

// To remove it we will select all the LIs that are added and then loop over them :

const LIs = document.querySelectorAll('li');

// for (let LI of LIs) {
//     LI.addEventListener('click', function() {
//         LI.remove();
//     })
// }

// Now, using above piece of code snippet we should be able to remove the LI/tweet that we mistakenly add. To test the same, let's 
// fo to your web page, add a new li and then click on that li to delete it.

// You will notice that you are unable to remove the li even after clicking on it. Now, go your index.html file and add a new
// li manually there under unordered list. Now, if you will go back to your web page and click on that manually added li,
// you will see that it will get removed on click.

// The reason why this is happening is because the LI we have added on our index.html page was there from the start and was also
// present when we ran our JS code.  So inside our JS code, when we called addEventListener() method, it knew only our already 
// present LIs that we have manually added. But this JS code is unable to look into future and apply the event listener on new
// lis that you add using your web page form.

// So we can just say that newly added LIs, that we have added using our form on web page, does not have addEventListener() attached
// to it.

// To overcome this, we are going to use something called as "Event Delegation". In this, we are going to apply event listener for 
// LIs to some other element in our html that remains there all the time, that is a parent of that element. For our example, 
// parent of our LIs is our Unordered list.

// So we will apply an addEventListener on "ul" instead of applying them on LI, because UL will remain there from the very start 
// even if that UL is empty. But we have to only trigger an event when there is a click on LI inside that UL. we will see that 
// with an example :

// We have already selected the UL in above code with constant variable : list.

list.addEventListener('click', function(evt) {
    console.log(evt); // When we will click on Post Tweet button, we will see the pointer event object in console.
    // inside this event object for pointer event. In this event object we have another DOM object inside it named 
    // "target" which contains the value value of what we clicked. Like, whether we have clicked on LI inside
    // UL or any other element inside UL, for example let say <p></p>

    // We have now added one LI under the UL and also an Para tag.

    // Now, let's move forward and remove our LIs when we click on them inside UL :

    // evt.target.remove(); // If we will directly add this, it is going to remove LIs on which we will click. However, it will also
    // remove other elements as well like : <p></p>

    // So we will first check and if target is LI, then only remove it :

    // For remving it we will use property inside the target object named as "nodeName" in an event object

    console.log(evt.target.nodeName);

    if(evt.target.nodeName === "LI"){
        evt.target.remove();
    }
})

