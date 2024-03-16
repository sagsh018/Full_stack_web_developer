// Here we are start learning about inline events and how to respond to them.

// To understand using example. Consider the index.html file in which we have a button creted. So lets try to trigger a JS alert pop up if someone clicks on that 
// button.

//  To do this, lets firstly try an add the inline JS code in our HTML code itself using onclick property. SEE HTML DOC for this :
// So we have added an alert for onclick event inline the HTML doc itself.

// So this inline approac of adding onlclick or any other event is something we do not follow as it has many disadvantages :
// * You may end up writing log js code separated by semi colen inside HTML
// * HTML code looks ugly and complex
// * for multiple lines you have write log of lines separated with ;
// * copy paste duplicate code for multiple buttons

// Long story short, this approach is not recommended.