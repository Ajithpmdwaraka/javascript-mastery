//

let a = 6;
let b = 3;
let c = 2;
// Assignment Operators
a = b; // Assigns the value of b to a
b += c; // Adds c to b and assigns the result to b
c -= a; // Subtracts a from c and assigns the result to c
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
// Chained Assignment
let x, y, z;
x = y = z = 10; // Assigns 10 to x, y, and z
console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
// Destructuring Assignment
let arr = [1, 2, 3];
let [first, second, third] = arr; // Destructures the array into variables
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);
// Object Destructuring
let obj = { name: "Alice", age: 25 };
let { name, age } = obj; // Destructures the object into variables
console.log("Name:", name);
console.log("Age:", age);
// Assignment with Functions
function add(a, b) {
    return a + b;
}
let result = add(5, 10); // Calls the function and assigns the result to result
console.log("Result of add function:", result);
// Assignment with Conditional (Ternary) Operator
let isAdult = (age) => age >= 18 ? "Adult" : "Minor"; // Ternary operator for assignment
let personAge = 20;
let status = isAdult(personAge);
console.log("Status:", status); // Outputs "Adult"
// Assignment with Logical Operators
let isLoggedIn = true;
let isAdmin = false;
let access = isLoggedIn && isAdmin ? "Granted" : "Denied"; // Logical AND for assignment
console.log("Access:", access); // Outputs "Denied"
