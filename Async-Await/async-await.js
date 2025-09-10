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

getData();

// here, fetchData() is declared. then, we create a async fn getData(). then we log start. 
// then it runs the fetchData (), then it runs the end log.

// make one arrow fn example.