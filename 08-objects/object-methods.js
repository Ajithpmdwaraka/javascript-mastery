const person = {
    firstName : "Elon",
    secondName : "Musk",
    greet: function () {
        console.log("Hey fellas");
    }
}

person.greet();

const user = {
    name: "Ajith",
    age : 20
}

function greet(){
    console.log("Hey from Ajith"); //Declaring a function outside the object
}

user.greeting = greet; //Adding function to the object

user.greeting();

