// Named Function:
// function greet() {
//     console.log("Hey everyone!");
// }
// greet();

// Anonymous Function / Function Expression:
// let greet2 = function () {
//     console.log("Hey everyone!");
// }
// greet2();


// Arrow Function: 
// #Note: used more as compared to other type of functions as it contains some advanced functionality.
// let greet3 = () => {
//     console.log("Hey everyone!");
// }
// greet3();


// const greet = (count) => {
//     console.log("Hello all!", count);
// }
// greet(2);


// const square = (num) => {
//     return num*num;
// }
// console.log(square(2));

// const square = (num) => num*num;
// console.log(square(2));



// Callback Function:

// const calculate = (a, b, operation) => {
//     return operation(a, b);
// }

// console.log(calculate(2, 3, function(n1, n2){
//     return n1+n2;
// }))

// OR

// const calculate = (a, b, operation) => {
//     return operation(a, b);
// }

// Anonymous Function - Method 1:
// const summation = calculate(2, 3, function(n1, n2){
//     return n1+n2;
// })
// console.log(summation);

// Named Function - Method 2:
// function sub(a, b) {
//     return a-b;
// }
// const subtraction = calculate(2, 3, sub )
// console.log(subtraction);

// Arrow Function - Method 3:
// const mul = (a, b) => a*b;
// const multiplication = calculate(2, 3, mul)
// console.log(multiplication);



// const arr = [2, 5, 6, 8, 9, 0, -3, -5, -2];

// Method 1:
// const printFirstNegativeNumber = (num) => num<0;

// Method 2:
// const printFirstNegativeNumber = (num) => {
//     return num<0;
// }

// Method 3:
// const printFirstNegativeNumber = (num) => {
//     if(num<0){
//         return num;
//     }
// }


// const result = arr.find(printFirstNegativeNumber);
// console.log(result);

// const result1 = arr.findIndex(printFirstNegativeNumber);
// console.log(result1);


// arr.forEach(num => {
//     console.log("Element: ", num);
// })

// arr.forEach((num, index) => {
//     console.log("Element: ", num, ", Index: ", index);
    
// })