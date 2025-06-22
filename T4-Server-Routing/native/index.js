const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./views/home.html', 'utf-8');
const About = fs.readFileSync('./views/about.html', 'utf-8');
const style = fs.readFileSync('./views/style.css', 'utf-8'); 

const server = http.createServer((req, res) => {
if ( req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end( homePage);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(About);

    } else if (req.url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(style);
    }
    else  {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }

});

server.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
