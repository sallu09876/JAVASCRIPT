// Immediately Invoked Function Expression.
// automatically get called after creating the fn.
// data will have privacy. = can't acces data outside the IIFE function.
// self contained - it executes independently without effecting the surrounding code.
// closure - a function remembering the variables from its outer scope.

(function () {
    console.log(`I am invoked immediately`);
    
})();