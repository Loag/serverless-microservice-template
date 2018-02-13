const database = require("./database");

module.exports.getData = (input, callback) => {
  database.getData(input, (err, data) => {
    if (!err) {
      callback(null, data);
    } else {
      callback(err);
    }
  });
};

module.exports.postData = (input, callback) => {
  database.createData(input, (err, status) => {
    if (!err) {
      callback(null, status);
    } else {
      callback(err);
    }
  });
}
