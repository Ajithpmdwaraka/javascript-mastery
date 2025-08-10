// There are two types of Data Types in JavaScript Primitive and Reference. The primitive data types are String Number Boolean Null undefined BigInt Symbol and Reference data types include Object Array and Function

//String
let a = "Hello World";
console.log(a);
//Number[can be an integer number or a floating point number]
let b = 4;
let c = 4.3;
console.log(b, c);
//Boolean datatype has rwo values true and false
let learning = true;
let completed = false;
console.log(learning, completed);

//Null is a special value that represents the absence of any value
let d = null;
console.log(d);
//Undefined is a variable that has been declared but has not been assigned any value
let e;  
console.log(e);
//BigInt is used to represent integers with arbitrary precision
let f = BigInt(1234567890123456789012345678901234567890);
console.log(f);
//Symbol is a unique and immutable data type that can be used as an identifier for object properties
let g = Symbol("unique");
console.log(g);
//Reference Data Types
//Object
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(person);
//Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
//Function
function greet() {
    return "Hello!";
}
console.log(greet());
// Type Checking
console.log(typeof a); // String
console.log(typeof b); // Number
console.log(typeof learning); // Boolean
console.log(typeof d); // Object (null is considered an object in JavaScript)
console.log(typeof e); // Undefined
console.log(typeof f); // BigInt
console.log(typeof g); // Symbol
console.log(typeof person); // Object
console.log(typeof fruits); // Object (arrays are a type of object)
console.log(typeof greet); // Function
console.log(greet()); // Calling the function
// Type Conversion
let numStr = "123";
let num = Number(numStr); // Convert string to number
console.log(num); // 123
console.log(typeof num); // Number
let boolStr = "true";
let bool = Boolean(boolStr); // Convert string to boolean
console.log(bool); // true
console.log(typeof bool); // Boolean
// Implicit Type Conversion
let implicitConversion = "5" + 5; // String concatenation
console.log(implicitConversion); // "55"
console.log(typeof implicitConversion); // String
// Explicit Type Conversion
let explicitConversion = String(5) + "5"; // Convert number to string
console.log(explicitConversion); // "55"
console.log(typeof explicitConversion); // String
