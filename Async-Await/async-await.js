// async makes a function that will return a promise.
// await pauses the function execution untill the promise is resolved or rejected.
// though it is asynchronous, it looks & behaves like synchronous.


function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data loaded !`)
        }, 2000);  //wait for 2s untill the promise is resolved.
    });
}

async function getData() {
    console.log(`Start`);
    
    const result = await fetchData();
    console.log(result);

    console.log(`End`);
    
}

getData(); // calling the async fn.

// here, fetchData() is declared. then, we create a async fn getData(). then we log start. 
// then it runs the fetchData (), then it runs the end log.
// but, since fetchData() takes 2s to resolve, it waits there for 2s.
// after 2s, it resolves the promise, and then the result is logged.