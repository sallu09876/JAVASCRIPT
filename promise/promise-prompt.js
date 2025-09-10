// promise using prompt value

let prompt = require(`prompt-sync`)();

let value = prompt(`Enter true or false : `);

let success = (value === 'true');
let myPromise = new Promise((resolve, reject) => {


    setTimeout(() => {
        if (success) {
            resolve(`promise is resolved succesfully`);

        } else {
            reject(`promise is rejected`);
        }
    }, 2000);
}
)

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log(`Promise execution finished !`))

