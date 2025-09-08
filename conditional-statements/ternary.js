const prompt = require('prompt-sync')();

let age = prompt("Enter your age: ");
let canVote = (age >= 18) ? 'Eligible to vote' : 'Not eligible to vote';
console.log(canVote);