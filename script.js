document.getElementById('evaluate-button').addEventListener('click', () => {
    const apiUrl = document.getElementById('api-url').value;
    const responseDisplay = document.getElementById('response-display');

    // Sample Interview Data (Replace with more realistic data)
    const interviewData = {
        candidateName: "John Doe",
        position: "Software Engineer",
        answers: [
            "I have experience with React and Node.js.",
            "I am a team player and problem solver."
        ]
    };

    responseDisplay.textContent = "Loading..."; // Show loading indicator

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(interviewData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        responseDisplay.textContent = JSON.stringify(data, null, 2); // Display formatted JSON
    })
    .catch(error => {
        console.error('Error:', error);
        responseDisplay.textContent = `Error: ${error.message}`; // Display error message
    });
});