/**
 * get your really cool data here.
 * @function
 * @param {string} input - a string
 * @param {dataCallback} callback
 */

module.exports.getData = (input, callback) => {
  /*
    remove 
  */
  if (input === '12345') {
    callback(null, ['foo', 'bar', 'baz']);
  } else {
    callback('an error has occured');
  }
};

/**
 * save an object here..
 * @function
 * @param {object} input - an object
 * @param {statusCallback} callback
 */

module.exports.createData = (input, callback) => {
  /*
    remove 
  */
  if (typeof input === 'object') {
    callback(null, 'success!')
  } else {
    callback('oh no! a write error occured.')
  }
};

/**
 * read callback.
 * @callback dataCallback
 * @param {error} err - an error
 * @param {array} data - some data
 */

/**
 * write callback.
 * @callback statusCallback
 * @param {error} error - an error
 * @param {string} status - creation status
 */