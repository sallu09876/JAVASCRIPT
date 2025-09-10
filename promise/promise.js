// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//syntax

// const promise = new Promise((resolve,reject) => {
//     //asynchronous operation
// })



// resolve = called when operation is succesfull.
// reject = called when operation is failure.


// .then = executes if the promise is resolve.
// .catch = executes if the promise is reject.
// .finally = executes if the promise is either resolve or reject.




let myPromise = new Promise((resolve, reject) => {  // creates a new promise object.
    let success = false;  //giving false by default.

    setTimeout(() => {
        if (success) {
            resolve(`Promise resolved succesfully`);
        } else {
            reject(`Promise rejected`);
        }
    }, 2000)  // 2000 is timeout. 2s.

})

myPromise   // calling promise function.
    .then(result => console.log(result))   // runs if the promise is resolved.
    .catch(error => console.log(error))    // runs if the promise is rejected.
    .finally(() => console.log(`Promise execution finished !`))   // always runs.

