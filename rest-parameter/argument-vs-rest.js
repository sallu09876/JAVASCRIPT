// compare arguments object with rest parameters
function showArguments() {
    console.log(arguments); // arguments is not an array (it's array-like object
}
showArguments(1, 2, 3);

function showRestParameters(...args) {
    console.log(args);// args is an array
}
showRestParameters(1, 2, 3);