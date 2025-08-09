// Scope in JavsScript refers to the visibility of varibles and functions within a program. In JavaScript there is three types of scope Glopal Scope, Function Scope and Block Scope

// Here variable x is declared in the Global Scope, so it can be accessed from anywhere in the program
var x = "Welcome to JavaScript"

function example() {
    console.log(x);
}
example();

console.log(x);

// Function Scope
function sayHello() {
    let a = "Hello";
    console.log(a);
}
sayHello();

// Block Scope
function hey() {
    if (true) {
        let y = 6;
        console.log(y);
    }
}
hey();