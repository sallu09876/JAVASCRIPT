// The match() method retrieves the matches when matching a string against a regular expression.

let str = "The rain in Spain stays mainly in the plain";
let matches = str.match(/ain/g); //match(regex,flags) // g- global search
console.log(matches);