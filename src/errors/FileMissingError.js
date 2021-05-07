const { ArgumentError } = require('./ArgumentError');

class FileMissingError extends Error {
  /**
   * @param {String} path
   */
  constructor(path) {
    super(`File ${path} does not exist!`);
  }
}

module.exports = {
  FileMissingError,
}