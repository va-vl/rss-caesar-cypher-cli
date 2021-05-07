const { ArgumentError } = require('./ArgumentError');

class FileAccessError extends Error {
  /**
   * @param {String} path
   */
  constructor(path) {
    super(`File ${path} cannot be accessed!`);
  }
}

module.exports = {
  FileAccessError,
}

