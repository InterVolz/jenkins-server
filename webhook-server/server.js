const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/webhook', async (req, res) => {
    console.log('Webhook received:', req.body);

    try {
        const jenkinsResponse = await axios.post(
            `${process.env.JENKINS_URL}/job/Intervolz Deployment/build?token=${process.env.JENKINS_TOKEN}`,
            {},
            {
                auth: {
                    username: process.env.JENKINS_USER,
                    password: process.env.JENKINS_TOKEN
                }
            }
        );
        console.log('Triggered Jenkins job:', jenkinsResponse.status);
    } catch (error) {
        console.error('Error triggering Jenkins job:', error);
    }

    res.status(200).send('Webhook processed');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
