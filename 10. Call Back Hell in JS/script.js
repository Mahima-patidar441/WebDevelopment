// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("Helloooo");
// } , 2000);
// console.log("three");
// console.log("four");

// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow 
// here program doesnt wait for two seconds ...it move to next instruction and print three and four

// CALLBACKS
// function sum(a,b){
//     console.log(a+b);
// }
// function Calculator(a,b, sumCallBack){
//     sumCallBack(a,b);
// }
// Calculator(2,3,sum);

// CALLBACK HELL : nested callbacks stacked below one another forming a pyramind structure(pyramid of DOOM)
// function getData(dataId , getNextData){
//     setTimeout(() => {
//         if(getNextData){
//             getNextData();
//         }
//         console.log("data",dataId);
//     }, 2000);
// }
// getData(1,()=>{
//     console.log("getting data 2...");
//     getData(2 , ()=>{
//         console.log("getting data 3...");
//         getData(3,()=>{
//             console.log("getting data 4...");
//             getData(4);
//         });
//     });
// });

// this is the problem of callBack hell ...getData.pyramind of DOOM...very difficult to understand 
 




