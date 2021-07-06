/*
Title : Routes handler
*/

// Dependencies
const { sampleHandler } = require("./Handlers/RoutesHandler/sampleHandler");
const { aboutHandler } = require("./Handlers/RoutesHandler/aboutHandler");
// Handler object - module scaffolding
const routes = {
  sample: sampleHandler,
  about: aboutHandler,
};

module.exports = routes;
