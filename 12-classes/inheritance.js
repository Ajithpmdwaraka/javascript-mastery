class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        return `Hey, ${this.name}`;
    }
}

class Student extends Person {

}

const student1 = new Student("Elon")
console.log(student1);
console.log(student1.greet());
