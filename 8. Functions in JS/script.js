
// some other code snippet

// const a = 10;
// const b = 2;
// const aPlusb = a + b;
// console.log("Result: ",aPlusb);

// some other code snippet

// const x = 12;
// const y = 6;
// const xPlusy = x + y;
// console.log("Result: ",xPlusy);

// some other code snippet

// const l = 20;
// const k = 4;
// const lPlusk = l + k;
// console.log("Result: ",lPlusk);
// 
// some other code snippet


// #Note:- In JS functions can be defined and declared anywhere in the code no matter if the calling is done before the definition it'll work properly.
// function definition:
// function summation(r, k) {
//     const result = r + k;
//     console.log("Result: ", result);
// }

// // function call:
// summation(20, 30);


// function greet(){
//     console.log("Hey welcome to our application!!");
// }

// greet();

// function greet(userName){
//     console.log("Hey welcome to our application Mr.", userName);
    
// }
// greet("Krish Makhija")


// Anonymous Function / Function Expression
// let summation = function (r, k) {
//     const result = r + k;
//     return result;
// }
// console.log(summation(2, 3));

// #Note:- Anonymous functions cannot be used if the calling is done above the definition in the code [They need to be defined above the calling or on the top of code].


// What if I called function without writing round brackets [()]:
// function summation( a, b){
//     return a + b;
// }
// console.log(summation);
// Output: whole function printed.

// console.log(summation(2, 3));
// Output: required summation output.


// Nested Functions:

// function addSquare(x, y) {
//     function square(num) {
//         return num*num;
//     }
//     console.log(square(2));
//     // #Note: Inner function cannot be called outside the outer function.
// }

// function addSquare(x, y) {
//     const a = square(x);
//     const b = square(y);

//     function square(num) {
//         return num*num;
//     }
//     return a+b;
// }
// console.log(addSquare(2, 4));

// CallBack is a function passed as an arguement to another function 

// forEach loop : to perform certain operation on each element of array
// let nums = [67,54,56];
// let calSquare = (num) => {
//     console.log(num*num);
// }
// nums.forEach(calSquare)

//map method : creates new array
// let nums = [45, 67,34];
// let newArr = nums.map((val) => {
//     console.log(val*val);
// });
// console.log(newArr);

// filter method
// let nums = [4,5,6,3,2,8,1];
// let newArr = nums.filter((val) => {
//     return val>=4;
// });
// console.log(newArr);

// reduce method : perform some operations and reduce the array to single value 
let arr = [1,2,3,4,5,6];

const output = arr.reduce ((res,curr) => {
    return res+curr;
})
console.log(output);
