document.getElementById('patient-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const symptoms = document.getElementById('symptoms').value;
  
    // Here you would send the data to the backend
    // Example: sending data to a Python Flask API
  
    fetch('http://localhost:5000/submit_patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, age, symptoms })
    })
    .then(response => response.json())
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
    });
  });
  