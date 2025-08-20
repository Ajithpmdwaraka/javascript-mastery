const person = {
    firstName: "Elon",
    secondName: "Musk",
    greet: function () {
        console.log(`Hello ${this.firstName} ${this.secondName}`);
    }
}

person.greet(); //Using 'this' to access properties of the object