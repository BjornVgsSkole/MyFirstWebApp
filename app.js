// Import Express.js module
const express = require('express');

// Initialize the Express application
const app = express();
const path = require('path');

// Define the port number for the server to listen on
const port = 3000;

// Define a route for the root URL ('/') and specify the response
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send 'Hello, World!' as the response
});

// Send HTML file to web browser for the URL ('/index')
app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console indicating the server is running
});