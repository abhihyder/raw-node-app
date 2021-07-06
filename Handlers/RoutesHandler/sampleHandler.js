/*
Title : Sample handler
*/

// Dependencies

// Handler object - module scaffolding
const handler = {};

handler.sampleHandler = (requestResponse, callback) => {
  console.log("sample handler");
  callback(200, {
    message: "This is sample url",
  });
};

module.exports = handler;
