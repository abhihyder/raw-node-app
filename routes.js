/*
Title : Routes handler
*/

// Dependencies
const { sampleHandler } = require("./Handlers/RoutesHandler/sampleHandler");
const { aboutHandler } = require("./Handlers/RoutesHandler/aboutHandler");
const { userHandler } = require("./Handlers/RoutesHandler/userHandler");
// Handler object - module scaffolding
const routes = {
  sample: sampleHandler,
  user: userHandler,
  about: aboutHandler,
};

module.exports = routes;
