// Variables are used to store data. In JavaScript, variables are declared using three keywords var, let and const

var x = 20;
console.log(x);

if (x > 6) {
    let y = 8;
    console.log(y);
}
console.log(y);
// Here it will so reference error, because we cannot access y outide the block of code

const a = 40;
console.log(a);
a = 30;
// Here it will show an type error, because we cannot reassign variable a as it is declared using the const keyword