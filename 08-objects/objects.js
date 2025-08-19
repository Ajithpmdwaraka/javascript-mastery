const person = {
    firstName: "Adrian",
    secondName: "Luna",
    age: 20
}

console.log(person);

const user = {
    name : "Ajith",
    age: 20,
    hobbies: ["coding", "workouts", "reading"],
    greet: function () {
        console.log("hello fellas")
    },
    education: {
        bachelors: "Bsc Computer Science",
        masters: "MVoc Software Application Development"
    },
}

console.log(user); 
console.log(person.firstName); //accessing properties of an object
console.log(person["secondName"]);
console.log(person["age"]);

person.firstName = "Ajith"; //updating properties of an object
console.log(person.firstName);

user.company = "Jobless Guy";
console.log(user.company); //adding new properties to an object

user.greet(); //calling a method of an object

console.log(user.hobbies[1]); //accessing array inside an object

console.log(user.education.bachelors); //accessing nested object properties

console.log(user.education["masters"]); //accessing nested object properties using bracket notation

console.log(user["education"]["bachelors"]); //another way to access nested object properties

delete user.company;

console.log(user);

console.log("age" in person); //to check if a property exist in an object

for (let prop in person) {
    console.log(prop); //To access keys
}

for (let prop in person) {
    console.log(person[prop]); //To access values
}

for (let prop in person) {
  console.log(prop, ":", person[prop]);
}

for (let prop in user) {
    console.log(`${prop} : ${user[prop]}`)
}