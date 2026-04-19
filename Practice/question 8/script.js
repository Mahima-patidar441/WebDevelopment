// Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again
let currMode = "light";
 let modebtn = document.querySelector("Button");
 modebtn.addEventListener("click" , () => {
    if(currMode ==="light"){
        currMode="dark";
        // document.querySelector("body").style.backgroundColor ="black";
        let body = document.querySelector("body");
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currMode="light";
        // document.querySelector("body").style.backgroundColor= "white";
        let body = document.querySelector("body");
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

 })
