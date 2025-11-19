**JavaScript Fundamentals with Examples**

1\. Variables

Used to store data values using var, let, or const.

let name = "Murali";



=====================================================

2\. Data Types

JavaScript supports primitive (string, number, boolean) and non-primitive (object, array) types.

let age = 30; // number

let isActive = true; // boolean

let user = { name: "Murali", age: 30 }; // object

=====================================================

3\. Operators

Operators perform operations on variables and values.

let sum = 10 + 5; // Arithmetic operator

=====================================================

4\. Conditional Statements

Used to perform actions based on conditions.

if (sum > 10) {

  console.log("Greater than 10");

}

=====================================================

5\. Loops

Loops execute a block of code repeatedly.

for (let i = 0; i < 3; i++) {

  console.log("Count:", i);

}

=====================================================

6\. Functions

Functions are reusable blocks of code that perform a task.

function greet(name) {

  return "Hello " + name;

}

console.log(greet("Murali"));

=====================================================

7\. Arrow Functions

A concise way to write functions using =>.

const greet = (name) => "Hi " + name;

console.log(greet("Murali"));

=====================================================

8\. Arrays

Arrays store multiple values in a single variable.

let fruits = \["Apple", "Banana", "Mango"];

console.log(fruits\[1]); // Banana

=====================================================

9\. Callbacks

A function passed as an argument to another function.

function showMessage(callback) {

  callback("Hello from callback!");

}

showMessage((msg) => console.log(msg));

=====================================================

10\. Promises

Used to handle asynchronous operations.

let promise = new Promise((resolve, reject) => {

  resolve("Data loaded");

});

promise.then((msg) => console.log(msg));

