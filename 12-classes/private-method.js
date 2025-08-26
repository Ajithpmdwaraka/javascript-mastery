class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName  = lastName
    }
    #fullName() { //setting fullName as a orivate method, so we cannot acces this function outside the class
        return `${this.firstName} ${this.lastName}`;
    }

    display() { //Now we can access it 
        return `${this.#fullName()}`
    }
}

const student = new Person("Elon", "Musk");
console.log(student.fullName());
console.log(student.display());