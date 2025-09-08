//important

for (let i = 0; i <= 5; i++) {
    let row = ``;
    for (let j = 1; j <= i; j++) {
        row += `*`;
    }
    console.log(row);
    
    
}

// or 

// for (let i = 1; i <= 5; i++) {
//     console.log('*'.repeat(i));
// }