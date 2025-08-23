function Person(fName, lName) {
    this.firstName = fName,
    this.lastName = lName
}

const person1 = new Person("Elon", "Musk");

console.log(person1);

class User{
    constructor(fName, lName){
        this.firstName = fName,
        this.lastName = lName
    }
}

const user1 = new User("Elon", "Musk");
console.log(user1);