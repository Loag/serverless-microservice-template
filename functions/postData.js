const taskrunner = require("../helpers/taskrunner");
const response = require("../helpers/response");

/**
 * post data function.
 * @function
 * @param {object} event - The input lambda event.
 * @param {lambdaCallback} callback
 */

module.exports = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  
  taskrunner.postData(data, (err, status) => {
    if (!err) {
      callback(null, response.success({ response: status }));
    } else {
      callback(null, response.failure({ response: err }));
    }
  });
};

/**
 * This callback is for a lambda function.
 * @callback lambdaCallback
 * @param {error} err error will always return null and be read from status code
 * @param {object} response status success or unexpected error has occured
 */