
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Load users from a local file (users.json)
let users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find the user in the users.json file
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid email or password.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
