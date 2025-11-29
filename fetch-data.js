// Step 1: Initialize the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data using await + fetch
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> element
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the complete list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Handle errors by clearing content and showing error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 9: Call fetchUserData after the DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
