class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        return `Hey, ${this.name}`;
    }
}

class Student extends Person {
    constructor(name) {
        super(name); //calling parent contructor function
    }
    greet() {
        return `${this.name} is studying`; //overrides the parent method
    }
}

const student1 = new Student("Elon");
console.log(student1.name);
console.log(student1.greet());

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject
    }
    greet() {
        return `${super.greet()} here, I will be teaching ${this.subject}`; //calls parent method using super.greet()
    }
}

const teacher1 = new Teacher("Bill", "Maths");


console.log(teacher1.greet());