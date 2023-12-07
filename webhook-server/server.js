const express = require('express');
const app = express();
const port = 3000; // or any other preferred port

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle POST requests to '/webhook'
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);

    // Example: Handle push event
    if (req.body && req.body.pusher) {
        console.log('Push event received');
        // Add logic to handle push event here
    }

    // Respond to GitHub that the webhook was received
    res.status(200).send('Webhook processed');
});

// Start the server
app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});
