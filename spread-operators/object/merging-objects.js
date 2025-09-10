// Merging objects using the spread operator

const object1 = { name: 'Avanthika', age: 21 };
const object2 = { gender: 'female', city: 'New York' };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject);
