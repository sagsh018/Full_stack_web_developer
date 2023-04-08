// setTimeout
// ==========

// used to basically introduce the delay in execution of some statement.
// example:

console.log("Hello..");
setTimeout(() => console.log("...you there..?"), 3000);
// So there are two arguments that are passed into above setTimeout method,
// first is callback function(notice it is single line implicit arrow function) and then the time in ms for delay
setTimeout(() => console.log("Looks like you are not there... Good Byee..!!"), 6000);


// setInterval() & clearInterval()

// Used to basically repeat the particular task over and over again after given interval time we give. Note that this
// function generates the ID and by passing that ID to clearInterval() method we could stop this setInterval() function

const id = setInterval(() => console.log(Math.floor(Math.random() * 6) + 1), 3000);

// clearInterval(id);