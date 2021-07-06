/*
Title : Uptime monitoring application
*/

// Dependencies

const http = require("http");
const { handleRegRes } = require("./Helpers/handlerRegRes");

// App object - module scaffolding
const app = {};

// Configuration

app.config = {
  port: 3000,
};

// Create server

app.createServer = () => {
  const server = http.createServer(app.handleRegRes);
  server.listen(app.config.port, () => {
    console.log("Listening to port no " + app.config.port);
  });
};

// Handle request response

app.handleRegRes = handleRegRes; // call the object

app.createServer();
