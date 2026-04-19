// Create a game where you start with random game number. Ask the user to keep guessing the game Number until the user enters correct value
let num = prompt("Enter a Number:");
let gameNum = 25;
while(num!=gameNum){
   num = prompt("you entered Wrong number . Guess again")
}

    console.log("Congratulations! you got the number");

