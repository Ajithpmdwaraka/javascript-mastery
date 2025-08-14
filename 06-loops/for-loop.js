// For Loop
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// Looping through even numbers 
for (let i = 2; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Looping through an array
let coding = ["JavaScript", "Python", "Swift"]

for (let i = 0; i < coding.length; i++){
    console.log(coding[i]);
}

// Inner Loop
for (let i = 1; i <= 6; i++){
    console.log(i);
    
    for (let j = 1; j <= 4; j++){
        console.log("Number" + j);
    }
}