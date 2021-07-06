// Dependencies
const fs = require("fs");
const path = require("path");

// Data object - module scaffolding
const lib = {};

//base directory of data folder

lib.basedir = path.join(__dirname, "/../.data/");

// write data to file

lib.create = (dir, file, data, callback) => {
  // open for write

  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "wx",
    (err, fileDiscriptor) => {
      if (!err && fileDiscriptor) {
        //convert data to stringify
        const stringData = JSON.stringify(data);

        fs.writeFile(fileDiscriptor, stringData, (err2) => {
          if (!err2) {
            fs.close(fileDiscriptor, (err3) => {
              if (!err3) {
                callback(false);
              } else {
                callback(err3);
              }
            });
          } else {
            callback(err2);
          }
        });
      } else {
        callback(err);
      }
    }
  );
};

module.exports = lib;
