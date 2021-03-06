/*
Title : Uptime monitoring application
*/

// Dependencies

const http = require("http");
const { handleRegRes } = require("./Helpers/handlerRegRes");
const data = require("./lib/data");

// App object - module scaffolding
const app = {};

// Configuration

app.config = {
  port: 3000,
};

//write Data ------------------------
/*
data.create("test", "testFile", { name: "Abhi Hyder" }, (err) => {
  console.log("Error to write is " + err);
});
*/

//Read Data --------------------------------
/*
data.read("test", "testFile", (err, result) => {
  console.log("Error to read is " + err);
  console.log("Read data is " + result);
});
*/

//Update Data ------------------------
/*
data.update("test", "testFile", { name: "Hyder" }, (err) => {
  console.log("Error to write is " + err);
});
*/

//Delete Data --------------------------------
/*
data.delete("test", "testFile", (err) => {
  console.log("Error to delete is " + err);
});
 */

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
