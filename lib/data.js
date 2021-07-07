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

// read data from file

lib.read = (dir, file, callback) => {
  fs.readFile(
    lib.basedir + dir + "/" + file + ".json",
    "utf-8",
    (err, data) => {
      callback(err, data);
    }
  );
};

// write data to file

lib.update = (dir, file, data, callback) => {
  // open for write

  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "r+",
    (err, fileDiscriptor) => {
      if (!err && fileDiscriptor) {
        //convert data to stringify
        const stringData = JSON.stringify(data);
        fs.ftruncate(fileDiscriptor, (err2) => {
          if (!err2) {
            fs.writeFile(fileDiscriptor, stringData, (err3) => {
              if (!err3) {
                fs.close(fileDiscriptor, (err4) => {
                  if (!err4) {
                    callback(false);
                  } else {
                    callback(err4);
                  }
                });
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

// delete file

lib.delete = (dir, file, callback) => {
  fs.unlink(lib.basedir + dir + "/" + file + ".json", (err) => {
    if (!err) {
      callback(false);
    } else {
      callback(err);
    }
  });
};


module.exports = lib;
