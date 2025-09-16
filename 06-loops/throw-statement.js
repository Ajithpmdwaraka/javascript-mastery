function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}
