let heading = document.querySelector("h2");
console.dir(heading.innerText);
heading.innerText = heading.innerText.concat(" from Apna College");


let divs = document.querySelectorAll(".box")
// divs[0].innerText = "uniqueValue 1";
// divs[1].innerText = "uniqueValue 2";
// divs[2].innerText = "uniqueValue 3";

let idx = 1;
for(div of divs){
    div.innerText = `uniqueValue ${idx}`;
    idx++;
}