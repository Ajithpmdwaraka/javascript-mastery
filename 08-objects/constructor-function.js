function Person(first, last) {
    this.firstName = first,
        this.lastName = last,
        this.greet = function () {
        return `Hello ${this.firstName} ${this.lastName}`
        }
}

const person1 = new Person("Elon", "Musk"); //The new keyword creates a new object based on the Person function.
const person2 = new Person("Bill", "Gates" );

console.log(person1);
console.log(person2);
console.log(person1.greet());

// The problem with the constructor function is that, the same method will be created for the objects created using the constructor function, which increae the memory