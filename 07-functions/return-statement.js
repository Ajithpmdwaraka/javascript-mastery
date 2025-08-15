function add(x, y) {
    return x + y;
}

let result = add(2, 4);
console.log(result);
console.log(`The sum is ${result}`);

function fn1(x) {
    function fn2(y) {
        return x * y;
    }
    return fn2;
}

let fn = fn1(2);
console.log(fn(8)); // Outputs 15