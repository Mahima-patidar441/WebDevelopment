// Javascript object is an entity having state and behavior 
// js object have a special property called prototype

// SIMPLE OBJECT 
// const student = {
//     name : "Rahul",
//     marks : 94.4,
//     printMarks : function(){
//         console.log("marks",this.marks);
//     },
// }

// SETTING PROTOTYPE
const employee = {
    calTax() {
        console.log("Tax rate is 10%");
    }
}
const karanArjun = {
    salary : 50000,
    // if object and prototype has the same method then object's mwthod will be used 
    calTax(){
        console.log("Tax rate is 20%");
        
    }
}
karanArjun.__proto__  = employee;

// CLASSES IN JAVASCRIPT
// class is a program-code template for creating objects .
// thode objects will have some state and behaviors inside it .

class Car{
    constructor(brand){
        console.log("new object is created");
        this.brand = brand
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    
}
let fortuner = new Car("fortuner");

let lexus = new Car("lexus");

// CONSTRUCTOR : automatically invoked by new

// INHERITANCE : passing down of properties and method from parent class to child class. uses the keyword "EXTENDS"
// if child and parent have same method, child's method will be used 

class Person{
    constructor(){
        console.log("Entering parent constructor...");
        this.species = "homo-saphiens"
    }
    sleep(){
        console.log("sleep")
    }
    eat(){
        console.log("eat");
        
    }
}
class Engineer extends Person {
    constructor(branch){
        console.log("Entering child constructor...")
        super();
        this.branch = branch
    }
    Work(){
        console.log("works hard and solve problem");
        
    }
}
let E2 = new Engineer("mechanical");

// SUPER KEYWORD : it is used to call the constructor of its parent class to access the parents properties and methods
 