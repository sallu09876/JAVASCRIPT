//useful for multi-way branching
const prompt = require('prompt-sync')();

let day = prompt("Enter a day of the week:");

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    case "Saturday":
    case "Sunday":
    
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}
