// This method converts the date to a string, using locale settings
const date = new Date();
console.log(date.toLocaleString());

// This will format the number as a currency string
const price = 123456.789;
console.log(price.toLocaleString("en-US", { style: "currency", currency: "USD" }));
