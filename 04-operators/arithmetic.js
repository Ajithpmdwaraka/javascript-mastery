// Arithmetic Operators are used to perform mathematical operations on operands

let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let exponent = a ** b; // Exponentiation
let increment = a++; // Post-increment
let decrement = b--; // Post-decrement
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient); 
console.log("Remainder:", remainder);
console.log("Exponent:", exponent);
console.log("Increment:", increment);
console.log("Decrement:", decrement);
// Compound Assignment Operators
a += b; // a = a + b   
b -= 2; // b = b - 2
console.log("Updated a:", a);
console.log("Updated b:", b);
// Unary Operators
let c = 15;
let negation = -c; // Negation
let positive = +c; // Positive
console.log("Negation:", negation);
console.log("Positive:", positive);
// Comparison Operators
let x = 10;
let y = 20;
console.log("Equal:", x == y); // Equal to
console.log("Not Equal:", x != y); // Not equal to
console.log("Strict Equal:", x === y); // Strict equal to
console.log("Strict Not Equal:", x !== y); // Strict not equal to
console.log("Greater Than:", x > y); // Greater than
console.log("Less Than:", x < y); // Less than
console.log("Greater Than or Equal:", x >= y); // Greater than or equal to
console.log("Less Than or Equal:", x <= y); // Less than or equal to
// Logical Operators
let condition1 = true;
let condition2 = false;
console.log("Logical AND:", condition1 && condition2); // Logical AND
console.log("Logical OR:", condition1 || condition2); // Logical OR
console.log("Logical NOT:", !condition1); // Logical NOT
// Bitwise Operators
let bitA = 5; // 0101 in binary
let bitB = 3; // 0011 in binary
console.log("Bitwise AND:", bitA & bitB); // Bitwise AND
console.log("Bitwise OR:", bitA | bitB); // Bitwise OR
console.log("Bitwise XOR:", bitA ^ bitB); // Bitwise XOR
console.log("Bitwise NOT:", ~bitA); // Bitwise NOT
console.log("Left Shift:", bitA << 1); // Left shift
console.log("Right Shift:", bitA >> 1); // Right shift
// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Ternary operator usage
