/*
Title : Not found handler
*/

// Dependencies

// Handler object - module scaffolding
const handler = {};

handler.notFoundHandler = (requestResponse, callback) => {
    console.log("not found handler");
    callback(404, {
      message: "404 not found",
    });
};

module.exports = handler;
