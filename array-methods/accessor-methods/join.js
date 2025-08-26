// join is an array method that creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // Output: "Fire,Air,Water"
console.log(elements.join('')); // Output: "FireAirWater"
console.log(elements.join('-')); // Output: "Fire-Air-Water"
console.log(elements.join(', ')); // Output: "Fire, Air, Water"
console.log(elements.join('_')); // Output: "Fire_Air_Water"
