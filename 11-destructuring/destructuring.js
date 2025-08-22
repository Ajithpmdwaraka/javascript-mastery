const person = {
    firstName: "Elon",
    lastName: "Musk"
} 

let { firstName: fName, lastName: lName } = person;

console.log(fName, lName);

const user = {
    firstName: "Bill",
    lastName: "Gates"
}

let { firstName, lastName } = user; //if the variable name and property names are same, we can write the code like this

//Es6 syntax

let firstNam = "Adrain"
let lastNam = "Luna"

const user2 = {
    firstNam,
    lastNam
}