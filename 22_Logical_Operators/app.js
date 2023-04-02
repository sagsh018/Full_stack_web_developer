// Example to demostrate the usage of AND, OR operators
// AND have precedence over OR. If you want OR to run first then make use of brackets.
const age = prompt("Enter Your Age");
if ((age >= 0 && age < 5) || age > 65) {
    console.log("You are allowed for FREE!!")
} else if (age >= 5 && age < 10) {
    console.log("Pay $10 to Enter")
} else if (age >= 10 && age < 65) {
    console.log("Pay $20 to Enter")
} else {
    prompt("Age Entered is not valid, Enter the valid age")
}

// Usage of negation that is ! logical operator

const number = prompt("Enter the number");
if (!(number > 0 && number < 10 || number > 65)) {
    console.log("Number is not between given ranges.")
}

// Switch conditional statment

let dayNum = prompt("Enter the number of day");

switch (parseInt(dayNum)) {
    case 1:
        console.log("Its Monday!");
        break;
    case 2:
        console.log("Its Tuesday!");
        break;
    case 3:
        console.log("Its Wednesday!");
        break;
    case 4:
        console.log("Its Thursday!");
        break;
    case 5:
        console.log("Its Friday!");
        break;
    case 6:
    case 7:
        console.log("Its Weekend!");
        break;
    default:
        console.log("Invalid Day number!!")
}