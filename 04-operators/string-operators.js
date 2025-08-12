// In JavaScript we can use String Operators to concatenate/join two or more strings

let firstName = "Ajith";
let lastName = "P M";
let fullName = firstName + " " + lastName; // Concatenation using the + operator
console.log(fullName); // Output: Ajith P M
// Template literals can also be used for string interpolation
let greeting = `Hello, ${fullName}!`; // Using template literals
console.log(greeting); // Output: Hello, Ajith P M!
// String length can be accessed using the length property
let nameLength = fullName.length; // Getting the length of the string
console.log(`Length of full name: ${nameLength}`); // Output: Length of full name: 10
// String methods can be used for various operations
let upperCaseName = fullName.toUpperCase(); // Convert to uppercase
console.log(upperCaseName); // Output: AJITH P M
let lowerCaseName = fullName.toLowerCase(); // Convert to lowercase
console.log(lowerCaseName); // Output: ajith p m
let trimmedName = fullName.trim(); // Remove whitespace from both ends
console.log(trimmedName); // Output: Ajith P M
let nameIncludes = fullName.includes("Ajith"); // Check if the string includes a substring
console.log(nameIncludes); // Output: true
let nameIndex = fullName.indexOf("P M"); // Find the index of a substring
console.log(nameIndex); // Output: 6
let nameSlice = fullName.slice(0, 5); // Extract a part of the string
console.log(nameSlice); // Output: Ajith
let nameReplace = fullName.replace("P M", "PM"); // Replace a substring
console.log(nameReplace); // Output: Ajith PM
// String concatenation using the concat() method
let anotherFullName = firstName.concat(" ", lastName); // Using concat method
console.log(anotherFullName); // Output: Ajith P M
// String comparison using localeCompare
let compareResult = firstName.localeCompare(lastName); // Compare two strings
console.log(compareResult); // Output: -1 (since "Ajith" comes before "P M" in lexicographical order)
// Multiline strings using template literals
let multilineString = `This is a string
that spans
multiple lines.`; // Using template literals for multiline strings
console.log(multilineString);
// String escaping using backslash
let escapedString = "He said, \"Hello!\""; // Using backslash to escape quotes
console.log(escapedString); // Output: He said, "Hello!"