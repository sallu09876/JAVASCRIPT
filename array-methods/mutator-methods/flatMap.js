//maps each element using a mapping function, then flattens the result one level deep (into a new array)

let arr = [1, 2, 3, 4];
let result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8]