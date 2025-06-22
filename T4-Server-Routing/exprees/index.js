const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Load pages once at startup
const homePage = fs.readFileSync('./views/home.html', 'utf-8');
const aboutPage = fs.readFileSync('./views/about.html', 'utf-8');

// Logger middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Method: ${req.method}, URL: ${req.url}`);
    next();
});

app.use(express.static('./views'));

// Routes
app.get('/', (req, res) => {
    res.send(homePage);
});

app.get('/home', (req, res) => {
    res.send(homePage);
});

app.get('/about', (req, res) => {
    res.send(aboutPage); 
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// Start the server
app.listen(3001, () => {
    console.log(`Server running on http://localhost:3001`);
});
