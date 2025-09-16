const students = [
  { name: 'Alice', age: 20, grade: "A" },
  { name: 'Bob', age: 22, grade: "A+" },
  { name: 'Charlie', age: 23, grade: "B+" },
];

// accessing properties
console.log(students[0].name); // Alice
console.log(students[1].age); // 22
console.log(students[2].grade); // B+   

// looping through the array
students.forEach(student => {
  console.log(`${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});