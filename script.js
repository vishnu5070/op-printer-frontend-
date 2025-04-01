document.getElementById('patient-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const symptoms = document.getElementById('symptoms').value;

  // Send data to the backend
  fetch('https://op-sheet-backend.onrender.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, symptoms })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Display the result
    document.getElementById('result').innerHTML = `
      <h3>Assigned Doctor: ${data.doctor}</h3>
      <p>Room Number: ${data.room}</p>
      <p>Estimated Wait Time: ${data.wait_time}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('result').innerHTML = `
      <p style="color: red;">An error occurred while processing your request. Please try again later.</p>
    `;
  });
});
