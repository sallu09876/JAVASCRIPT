const prompt = require("prompt-sync")();

let temperature = prompt("Enter the temperature:");

if (temperature > 25) {
    console.log("It's a hot day.");
} else {
    console.log("It's a cool day.");
}