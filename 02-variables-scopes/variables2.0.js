// Example with var
var name = "Ajith";
console.log(name); // Output: Ajith
var name = "Mehzin"; // Re-declared
console.log(name); // Output: Mehzin
// var is function-scoped, so it doesn't respect block scope
if (true) {
  var age = 25;
}
console.log(age); // Output: 25


// Example with let
let city = "Pune";
console.log(city); // Output: Pune
city = "Mumbai"; // Updated
console.log(city); // Output: Mumbai
// let is block-scoped, so re-declaration in same scope is not allowed
// let city = "Delhi"; // ❌ Error: Identifier 'city' has already been declared
if (true) {
  let country = "India";
  console.log(country); // Output: India
}
// console.log(country); // ❌ Error: country is not defined


// Example with const
const PI = 3.14;
console.log(PI); // Output: 3.14
// PI = 3.14159; // ❌ Error: Assignment to constant variable
// const PI = 22/7; // ❌ Error: Identifier 'PI' has already been declared
if (true) {
  const gravity = 9.8;
  console.log(gravity); // Output: 9.8
}
// console.log(gravity); // ❌ Error: gravity is not defined
