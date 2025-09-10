// async-await using arrow function. using try catch and finally.

const fetchData = () => {    //  used arrow function
    return new Promise((resolve, reject) => {   // used both resolve and reject.
        let result = false;    // declared result as false by default.
        setTimeout(() => {  
            if (result) {
                resolve(`Data is loaded resolved`);
                
            } else {
                reject(`Result is loaded rejected`);
                
            }
        }, 3000);
    });
}

const getData = async () =>  {  // used arrow function
    console.log(`Start`);  // start executes first.

    // using try and catch for resolve and reject.
    try {   // try block for resolve
        const result = await fetchData();
    console.log(result);
        
    } catch (error) {  // catch block for reject
        console.log(error);
    }
    finally {
        console.log(`End`);
    };
    

};
getData()
