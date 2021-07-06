/*
Title : Sample handler
*/

// Dependencies

// Handler object - module scaffolding
const handler = {};

handler.aboutHandler = (requestResponse, callback) => {
  callback(200, {
    message: "This is about url",
  });
};

module.exports = handler;
