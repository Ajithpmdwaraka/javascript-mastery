function display(result) {
    console.log(result);
}

function add(num1, num2, myCallBack){
    let sum = num1 + num2;
    myCallBack(sum);
}
add(2, 3, display); 