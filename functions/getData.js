const taskrunner = require("../helpers/taskrunner");
const response = require("../helpers/response");

/**
 * get data function.
 * @function
 * @param {object} event - The input lambda event.
 * @param {lambdaCallback} callback
 */

module.exports = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const input = event.pathParameters.id;

  taskrunner.getData(input, (err, data) => {
    if (!err) {
      callback(null, response.success({ response: data}));
    } else {
      callback(null, response.failure({ response: err }));
    }
  });
};