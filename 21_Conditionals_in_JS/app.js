console.log("Its working")

// Below code is for basic understanding of if, if - else, and if - else if - else statement usage in javascript.
let randNum = Math.floor(Math.random() * 2)
console.log(randNum)

if (randNum === 0) {
    console.log("We got Heads")
}

if (randNum === 1) {
    console.log("We got Tails")
}

//Complete if elseif and else ledder to understand.
const age = prompt("Enter Your age")
console.log(`You have entered ${age}`)
if (age < 5) {
    console.log("You are a Baby. You are allowed for FREE..!")
} else if (age < 10) {
    console.log("You are a Child, you can pay $10")
} else if (age < 60) {
    console.log("You are an adult, you can pay $20")
} else {
    console.log("You comes under senior catagory, Just pay $10")
}

// To see how we can nest the conditions
const password = prompt("Enter the password")
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Password Accepted..!!")
    } else {
        console.log("Spaces are not allowed in passowrd..!")
    }
} else {
    console.log("Length of the password must be more than or equal to 6 characters.")
}


// Note :: Falsy Values --> false, 0, ""(Empty string), null, undefined, NaN.
//          Rest everything in Javascript is Truthy.