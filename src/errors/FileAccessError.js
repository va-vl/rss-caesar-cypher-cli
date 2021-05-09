const { ArgumentError } = require('./ArgumentError');

class FileAccessError extends ArgumentError {
  /**
   * @param {String} path
   */
  constructor(path) {
    super(`File ${path} cannot be accessed!`);
  }
}

module.exports = {
  FileAccessError,
};
