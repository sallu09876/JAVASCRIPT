// another way to define function inside an expression.
// but we assign it into a variable.
// not hoisted.
// it can be named or anonymous.
// can be used as argument.
// mostly used when using setTimeout.
// can be assigned to variable / object.

const sayHello = function () {
    console.log(`Hello`);

}
sayHello();


// example for object
const math = {
    add: function (a, b) {       // a,b are parameter
        return a + b;
    }
}
console.log(math.add(5, 3));    // argument
