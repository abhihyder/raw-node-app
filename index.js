/*
Title : Uptime monitoring application
*/

// Dependencies

const http = require('http');
const url = require('url');

// App object - module scaffolding
const app = {};

// Configuration

app.config = {
    port : 3000,
};

// Create server

app.createServer = ()=>{
    const server = http.createServer(app.handleRegRes);
    server.listen(app.config.port, ()=>{
        console.log('Listening to port no '+ app.config.port);
    });

};

// Handle request response

app.handleRegRes = (reg, res)=> {
    //get url and perse it
    const parsedUrl = url.parse(reg.url, true);
    console.log(parsedUrl);
    res.end('Nodejs serve is running!');
};

app.createServer();