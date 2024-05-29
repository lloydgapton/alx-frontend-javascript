function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Your API call logic here
        // For example, using fetch to make an HTTP request:
        fetch('https://api.example.com/data')
            .then(response => {
                if (response.ok) {
                    // If the response is successful, resolve the promise with the data
                    resolve(response.json());
                } else {
                    // If there's an error, reject the promise with an error message
                    reject(new Error('API request failed'));
                }
            })
            .catch(error => {
                // Handle any other errors (e.g., network issues)
                reject(error);
            });
    });
}

// Example usage:
getResponseFromAPI()
    .then(data => {
        console.log('API response:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    });

