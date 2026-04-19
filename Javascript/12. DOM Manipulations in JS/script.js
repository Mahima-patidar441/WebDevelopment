// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName


// let firstEl = document.querySelector(".heading");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".heading");
// console.dir(allEl);

// PROPERTIES
// tagName : returns tag for elements nodes
// innerText : returns the text content of the element and all its children
// innerHTML: returns the plain text or HTML contents in the elements
// textContent: returns the textual content even for hidden elements

// let x = document.querySelector("div").children;
// console.dir(x);

// getAttribute METHOD
// let div = document.querySelector("div");
// console.log(div.innerText);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// setAttribute METHOD
// let para = document.querySelector("p");
// para.setAttribute("id","123");
// let id = para.getAttribute("id")
// console.log(id);

// ACCESSING THE STYLES FROM JAVASCRIPT FILE
// let div = document.querySelector("div")
// div.style.backgroundColor ="green";
// div.style.fontSize = "2rem"
// div.innerText = "Hello";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn)

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>I am new Heading</i>"
// let para = document.querySelector("p");
// para.before(newHeading)

//Insert elements 
// Node.append(el) : adds the elements at the end of the Node(inside)
// Node.prepend(el) : adds the elements at the start of the Node(inside)
// Node.before(el) : adds the elements before of the Node(outside)
// Node.after(el) : adds the elements  after of the Node(outside)

// delete Elements 
// node.remove()

let para = document.querySelector("p");
para.remove();