class Person{
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
     get greet() {
        return `Hello ${this.name}`;
    }
}

const person1 = new Person("John", 40);

console.log(person1.greet); //If we are using get keyword we dont need to write () with greet