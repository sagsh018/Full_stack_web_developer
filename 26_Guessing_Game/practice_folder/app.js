let maximumNumber = prompt("Enter the maximum number you want to go up !! or type quit to exit the game ");
let flag = 1;

while(maximumNumber.toLowerCase() !== "quit") {

    while(!parseInt(maximumNumber)){
        maximumNumber = prompt("Enter the valid maximum number you want to go up to ! or enter quit to leave the game");
        if(maximumNumber.toLowerCase() === "quit") {
            flag = 0;
            break;
        }
    }
    
    if(flag === 0){
        console.log("You decided to quit the game in between, you are so coward!");
    } else {
        const randomNumber = Math.floor(Math.random()*maximumNumber) + 1;
        // alert(`Random Number : ${randomNumber}`);
        
        let guess = prompt("Please guess the number to win the game");
        // alert(guess);
        
        let attempts = 1;
        
        while(parseInt(guess) !== parseInt(randomNumber) && guess.toLowerCase() !== "quit"){
            attempts++;
            if(parseInt(guess)>parseInt(randomNumber)){
                guess = prompt("The number you have guessed is higher, try again !");
            } else {
                guess = prompt("The number you have guessed is lower, try again !");
            }
        }
        
        if(guess.toLowerCase() === "quit"){
            console.log("You Quit!");
        } else {
            console.log(`You guessed it in ${attempts} attempts`);
        }
    }
    
}