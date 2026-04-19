// Array
// let arrName = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Printing:-
// 1.
// for (let i = 0; i < arrName.length; i++) {
//     console.log(arrName[i]);
// }

// 2.
// console.log(arrName);

// In JS arrays can be the combination of data of different variables while other lannguages are not able to do it since we define it's datatype while declaration like: int, String, etc.
let studentArray = ["abc", "def", "ghi", "jkl", "mno", 123, true, function dummyFunc() {console.log("Dummy function");}, {name: "Krish Makhija", age: 18}]
console.log(studentArray);
 
// we can update any element of the array by another element even of another datatype:
console.log(studentArray[2]); //output: ghi
studentArray[2]=123;
console.log(studentArray[2]); //output: 123


// Copy Array
// let newArr = studentArray;
// console.log(newArr);
// newArr[0]="students";
// console.log(newArr);
// console.log(studentArray);
// the output in both the array will be same as when we assign a array in an another array the address of the elemnts is same (the new array points to the same elements of the another array and the address is same), So if we change the element from either first array or the new one both gets affrcted.

// to get the index of any element:
// console.log(studentArray.indexOf(123)); //output: 2
// console.log(studentArray.indexOf(456)); //output: -1[it's not present]

// Check the element is present or not:
// console.log(studentArray.includes(456)); //output: false
// console.log(studentArray.includes(123)); //output: true


// insert at the end:
// console.log(studentArray);
// studentArray.push("Laptop")
// console.log(studentArray);

// insert at the start:
// console.log(studentArray);
// studentArray.unshift("Mobile")
// console.log(studentArray);


// Delete the last element:
// console.log(studentArray);
// studentArray.pop();
// console.log(studentArray);

// Delete the first element:
// console.log(studentArray);
// studentArray.shift();
// console.log(studentArray);


let marks = [98, 78, 65, 34, 66, 34, 22, 92];
console.log(marks);

// Sort the array:
// marks.sort();
// console.log(marks);

// sub-array:
let submarks = marks.slice(2,6);
console.log(submarks);
// #Note:- first address will be included int the slice functionality but the last address won't be included[if the addresses are (2,6) then the slice will include the address 2 but won't include 6]
