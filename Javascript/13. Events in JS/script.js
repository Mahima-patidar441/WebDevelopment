// Events

// 1. Event Handlers:
// (Onclick, onload, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup)

// function onClickFunc(){
//     console.log("The box has been clicked");
    
// }

// const keyPressEvent = ()=>{
//     console.log("The Key Has been hitted");
    
// }

// const onkeyUp = ()=>{
//     console.log("On Key Up");
    
// }

// const onkeyDown = ()=>{
//     console.log("On Key Down");
    
// }



// We have applied same two functions to be called by a same event in a same element but output clearly shows only one function call, So it cannot be achieved or done by event handlers. #Note:- Event Listeners can overcome this.

// #Note:- In case of Event handlers we weree defining something in a html file and we always have on as a prefix keyword, while in Event Listeners we don't need to change anything in html and also don't have the keyword.

// 2. Event Listeners:
// const  box1 = document.getElementById("box-1");
// box1.addEventListener("click", ()=>{
//     console.log("Click has been triggered");
// })


// const  box1 = document.getElementById("box-1");
// box1.addEventListener("click", ()=>{
//     console.log("Click has been triggered - 1");
// })

// box1.addEventListener("click", ()=>{
//     console.log("Click has been triggered - 2");
// })


// To know the details of event in detail or a particular: 
// const  box1 = document.getElementById("box-1");
// box1.addEventListener("click", (event)=>{
//     console.log("Click has been triggered - 1", event);
// })

// box1.addEventListener("click", (event)=>{
//     console.log("Click has been triggered - 2", event.clientX, event.clientY);
// })


// const  box1 = document.getElementById("box-1");
// box1.addEventListener("click", ()=>{
//     console.log("Box");
// })

// const cont = document.getElementById("cont");
// box1.addEventListener("click", ()=>{
//     console.log("Container");
// })
// #Note:- the first prio will be for a child as compared to parent in output. If we wanna change it then we need to pass third parameter to the variable containing parent.
// It is a Boolean value true or false[Default-No need to write]. 
// If we change it to true then the prio will change to parent first.
// const  box1 = document.getElementById("box-1");
// box1.addEventListener("click", ()=>{
//     console.log("Box");
// })

// const cont = document.getElementById("cont");
// box1.addEventListener("click", ()=>{
//     console.log("Container");
// }, true)

// events in JS : the change in the state of the object

// let btn = document.querySelector("button")
// btn.onclick = () =>{
//     console.log("Button was clicked!");
//     let a = 25;
//     a++;
//     console.log(a);
    
// }
// let div = document.querySelect("div");
// div.onmouseover =() => {
//     console.log("you are inside the div")
// }

// EVENT LISTENERS
let btn = document.querySelector("button");
btn.addEventListener("click" , () => {
    console.log("Button was clicked");
})

btn.addEventListener("click" , (evt)=>{
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);
})
