function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },3000);
    })
}
// getData(1).then((res)=> {
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

//  PROMISE CHAINING
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
 })
 .then((res)=>{
    console.log(res);
 })

// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         // resolve("success");    
//         reject("error");
//     });
// };
// let promise = getPromise();
// promise.then(() =>{
//     console.log("Promise fulfilled");
// });
// promise.catch(() => {
//     console.log("rejected");
// })

// function asynFunc(){
//     return new Promise((resolve , reject ) => {
//         setTimeout(()=>{
//             console.log("Some data1");
//             resolve("success");
//         },4000)
//     })
// }
// function asynFunc2(){
//     return new Promise((resolve , reject ) => {
//         setTimeout(()=>{
//             console.log("Some data2");
//             resolve("success");
//         },4000)
//     })
// }
// console.log("Fetching data 1");
// asynFunc().then((res) => {
//     console.log("fetching data 2...");
//     asynFunc2().then((res) => {});
// })
