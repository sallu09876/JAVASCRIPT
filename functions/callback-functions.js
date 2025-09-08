// functions that are passsed as arguments to other functions.

// 1. why use callback function?
// handle asynchronous operation.
// avoid blocking of code execution.


function greetUser(name) {
    console.log(`hello  ${name}`);

}

// this function takes another function (callback) as parameter.
function getUserInput(callback) {
    const name = `Liara`;
    callback(name);
}

// getUserInput pass greetUser 
getUserInput(greetUser);