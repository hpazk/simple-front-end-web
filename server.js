require('dotenv').config();  // Load .env file
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.ejs with injected API_URL from .env
app.get('/', (req, res) => {
    res.render('index', { apiUrl: process.env.API_URL });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
