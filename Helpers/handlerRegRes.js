/*
Title : handle request and response
*/

// Dependencies
const url = require("url");
const routes = require("../routes");
const { StringDecoder } = require("string_decoder");
const {
  notFoundHandler,
} = require("../Handlers/RoutesHandler/notFoundHandler");

const { parseJSON } = require("./utilities");
// Handler object - module scaffolding
const handler = {};

handler.handleRegRes = (reg, res) => {
  //get url and perse it
  const parsedUrl = url.parse(reg.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = reg.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = reg.headers;

  const requestResponse = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headerObject,
  };

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  // Proccess request data
  const decoder = new StringDecoder("utf-8");
  let bodyData = "";
  reg.on("data", (buffer) => {
    bodyData += decoder.write(buffer);
  });

  reg.on("end", () => {
    bodyData += decoder.end();

    requestResponse.body = parseJSON(bodyData);
    chosenHandler(requestResponse, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};
      const payloadString = JSON.stringify(payload);

      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
};

module.exports = handler;
