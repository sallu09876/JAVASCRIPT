// Using rest parameters with named parameters

function greet(firstName, lastName, ...titles) {
  console.log(`Hello, ${firstName} ${lastName}!`);
  console.log(`Titles: ${titles.join(", ")}`);

}               

greet("John", "Doe", "Mr.", "Dr.", "PhD");