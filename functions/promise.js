//promise means a value that may be available now, or in the future, or never.
//promise is used to handle asynchronous operations in JavaScript.
//promise can be in one of three states: pending, fulfilled, or rejected.
// Promise example
const myPromise = new Promise((resolve, reject) => { 
  const success = true; 

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected.");
    }
  }, 2000);
});

myPromise
  .then((result) => console.log(result)) // Handle success
  .catch((error) => console.error(error)) // Handle error
  .finally(() => console.log("Promise has been settled.")); // Always executed
