class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName  = lastName
    }
    static #fullName(x) { 
        return `${x.firstName} ${x.lastName}`;
    }

    display() { 
        return `${Person.#fullName(this)}`
    }
}

const student = new Person("Elon", "Musk");
console.log(student.fullName());
console.log(student.display());