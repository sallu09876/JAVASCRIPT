// Async/Await is a syntax sugar built on top of Promises.
// It allows us to write asynchronous code in a more synchronous manner.
// The 'async' keyword is used to declare an asynchronous function.
// The 'await' keyword is used to wait for a Promise to resolve or reject.

//async means a function always returns a promise.
//await means a function can pause execution until a promise is resolved.
// Async/Await makes it easier to read and write asynchronous code.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function getData() {
  console.log("Start");

  const result = await fetchData();
  console.log(result); // wait until the promise resolves

  console.log("End");
}

getData();

// look and behavior is similar to synchronous code
// but it is still asynchronous under the hood.

