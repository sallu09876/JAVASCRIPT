//A function is a reusable block of code that performs a task.
// function decleration is one of the ways to define a function in JavaScript.


/* function functionName(){
      block of codes
}
*/

//key features 
// 1. this is hoisted. hoisting means we can call the function before its declaration.
// 2. named functions. named functions can be called before they are defined.
function greet(name) {  //parameter (we don't know the name)
    console.log(`Hello ` + name + ` !`);
    
}
greet(`Saran Anil V P`);  //argument  (name is Saran Anil V P).