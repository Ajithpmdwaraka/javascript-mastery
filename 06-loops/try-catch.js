try {
    let result = divide(10, 0);
} catch (error) {
    console.log("Error:", error);
} finally {
    console.log("This will always run.");
}
