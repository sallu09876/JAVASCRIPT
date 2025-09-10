// async-await using then catch and finally

const fetchData = () => {    //  used arrow function
    return new Promise((resolve, reject) => {   // used both resolve and reject.
        let result = true;    // declared result as false by default.
        setTimeout(() => {  
            if (result) {
                resolve(`Data is loaded resolved`);
                
            } else {
                reject(`Result is loaded rejected`);
                
            }
        }, 3000);
    });
}

const getData = async() => {
    console.log(`Start`);
    
    fetchData()
    .then((result) => {
        
        console.log(result);  // no need of await here.
        
    }).catch((err) => {
        console.log(err);
        
    }).finally(()=> {
        console.log(`End`);
    })
    
};

getData();

