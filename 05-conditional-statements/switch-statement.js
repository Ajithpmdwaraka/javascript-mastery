// Switch statement in JavaScript is used to execute a block of code based on the expression

let a = 6;

switch (typeof a) {
    case "number":
        console.log("It is a Nunber DataType");
        break;
    case "string":
        console.log("It is a String DataType");
        break;
    case "boolean":
        console.log("It is a Boolean DataType");
        break;
    default:
        console.log("Other DataType");
}