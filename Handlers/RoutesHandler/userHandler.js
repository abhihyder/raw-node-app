/*
Title : User handler
*/

// Dependencies

// Handler object - module scaffolding
const handler = {};

handler.userHandler = (requestResponse, callback) => {
  const acceptedMethods = ["get", "post", "put", "delete"];

  if (acceptedMethods.indexOf(requestResponse.method) > -1) {
    handler._user[requestResponse.method](requestResponse, callback);
  } else {
    callback(405);
  }
};

handler._user = {};

handler._user.get = (requestResponse, callback) => {
  callback(200, {
    message: "This is get method for user",
  });
};
handler._user.post = (requestResponse, callback) => {
  callback(200, {
    data: requestResponse.body,
  });
};
handler._user.put = (requestResponse, callback) => {
  callback(200, {
    message: "This is put method for user",
  });
};
handler._user.delete = (requestResponse, callback) => {
  callback(200, {
    message: "This is delete method for user",
  });
};

module.exports = handler;
