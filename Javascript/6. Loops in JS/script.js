// # For Loop

// infinite loop
// this loop will crash the app or web
// for(;;){

// }

// for(let i = 0; i<10; i++){
//     console.log("Krish Makhija");
// }

// for(let j=10; j>0; j--){
//     console.log("abc");
// }

// # While Loop
// While loops are used when we are not sure when to end the loop as it can be given by user.

// let count = 0;
// while (count<5) {
//     console.log(count);
//     count++;
// }

// let count2 = 0;
// do {
//     console.log(count2);
//     count2++;
// } while (count2<5);

// // Continue and Break statements
// let count = 0;
// while(count<10){
//     if(count==2){
//         count++;
//         continue
//     }
//     console.log(count);
//     count++;
//     if (count==8) {
//         break
//     }
// };

// for-of loop
// let str = "JavaScript"
// let size = 0;
// for (let i of str) {
//     console.log("i :", i);
//     size++;
// }
// console.log("The length of string is :" ,size)

// For-in loop
let student = {
    name: "Mahima",
    class: 12,
    marks: 98,
    age: 20
}
for(let key in student){
    console.log("key=", key, ", value =",student[key])
}
