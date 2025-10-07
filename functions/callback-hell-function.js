//Callback Hell is a situation in JavaScript where multiple nested callbacks make the code hard to read and maintain. This often occurs when performing asynchronous operations in sequence.
// Callback Hell Example
function firstFunction(callback) {
    setTimeout(() => {
        console.log("First function executed");
        callback();
    }, 1000);
}

function secondFunction(callback) {
    setTimeout(() => {
        console.log("Second function executed");
        callback();
    }, 1000);
}

function thirdFunction(callback) {
    setTimeout(() => {
        console.log("Third function executed");
        callback();
    }, 1000);
}

firstFunction(() => {
    secondFunction(() => {
        thirdFunction(() => {
            console.log("All functions executed");
        });
    });
});