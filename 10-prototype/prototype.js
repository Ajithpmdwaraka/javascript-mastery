function Person(first, last){
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.gender = "Male"; //To add new property to constructor function
Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Bill", "Gates");

console.log(person1.gender);
console.log(person2.getFullName());

function User(first, last){
    this.firstName = first;
    this.lastName = last;
}

User.prototype.age = 23;

const user1 = new User("Elon", "Musk");

User.prototype = { age: 24 }

console.log(user1.age);

const user2 = new User("Bill", "Gates");

console.log(user2.age);  //If a prototype value is changed, then all the new object will have the changed property value and all the previously created objects will have the previous value

