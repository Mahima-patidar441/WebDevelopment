//  Create a new button element. give it a text "Click me", background color of red and text color of white.
// Insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);