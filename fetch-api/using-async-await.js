async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        console.log("First 5 users:");
        data.slice(0, 5).forEach(user => {
            console.log(`- ${user.id} (${user.username})`);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getUsers();