// Async-Await :
// Async function always returns a promise
// Await pauses the execution of its surrounding async function unitl the promise is settled

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data")
//             resolve(200);
//         },2000);
//     })
// }

// async function getWeatherData(){
//     await api();
//     await api();
// }

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve(200);
        },2000);
    });
}
// async function getAllData(){
//     console.log("Getting data 1...")
//     await getData(1);
//     console.log("Getting data 2...")
//     await getData(2);
//     console.log("Getting data 3...")
//     await getData(3);
//     console.log("Getting data 4...")
//     await getData(4);

// }
// IIFE : IIFE is a function that is called immediately as soon as it is defined 
// no need to call that function 
(async function (){
    console.log("Getting data 1...")
    await getData(1);
    console.log("Getting data 2...")
    await getData(2);
    console.log("Getting data 3...")
    await getData(3);
    console.log("Getting data 4...")
    await getData(4);

})();