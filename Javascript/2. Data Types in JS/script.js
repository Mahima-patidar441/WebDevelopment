// #NOTE:- We are not required to declare the datatype of the variables and they can be overwritten as they will change the same variable accordingly also.

// let a = 123;
// console.log(a);
// console.log(typeof(a));

// a = "demo";
// console.log(a);
// console.log(typeof(a));

// a = false;
// console.log(a);
// console.log(typeof(a));

// let b;
// let sum = null;

// syntax in java is below:-
// int a = 23;
// int b = 25;
// int sum;

// sum = a + b;

// int a = 23;
// int b = 25;
// int sum = 0;

// sum = a + b;

// console.log("The value of sum is: ", sum);
// console.log("The type of sum is: ", typeof(sum));



// let v1 = 12;
// console.log(v1+1);

// let v2 = "12";
// console.log(v2+1);
// // since it is string so the 1 will be attached at the end not added.

// let abc = 123;
// // String(abc) It is a wrong way it won't work because we are converting abc to string but we are not assigning it anywhere, So the correct way is written below.
// let result = String(abc); //We can also convert it using only one variable by using the same variable name on both sides[abc = String(abc);]. 
// console.log("The value of abc is: ", abc);
// console.log("The type of abc is: ", typeof(abc));
// console.log("The type of abc is: ", typeof(result));



// // let name = "Krish";
// // console.log("The value of abc is: ", name);
// // console.log("The type of abc is: ", typeof(name));

// // name = Number(name);
// // console.log("The value of abc is: ", name); //It will show NaN[Not a Number] as output because Strings can only be converted to number if the String contains only numbers.
// // console.log("The type of abc is: ", typeof(name));

// let name = "Krish";
// console.log("The value of abc is: ", name);
// console.log("The type of abc is: ", typeof(name));

// name = Boolean(name);
// console.log("The value of abc is: ", name); //It will show true as output because all the digits other than 0 in boolean are considered as true .
// console.log("The type of abc is: ", typeof(name));
 
//Object
const Product = {
    title:"Ball pen",
    rating: 5,
    price:285,
    offer:5
}
console.log(Product);

Product.price = 500;
console.log(Product.price)
