class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    static greet() {
        return `Hey, ${this.name}`;
    }
}

Person.greet(); //class can acces the static metho

const person1 = new Person("Elon", 40)
console.log(person1.greet()); //object cannot access it since it is declared in sattic keyword
