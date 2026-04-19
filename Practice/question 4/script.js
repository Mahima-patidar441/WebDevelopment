// Prompt the user to enter their full name. generate a username for them based on the input. start with @ , followed by their name and ending with fullName length

let fullName = prompt("Enter your full name without spaces:");

let username = "@" + fullName + fullName.length;
console.log(" your username:", username);