class Person{
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    set changeName(newName) {
        this.newName = newName
    }
}

const person1 = new Person("John", 40);

person1.changeName = "Ajith";
console.log(person1.newName);
