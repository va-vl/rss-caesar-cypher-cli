const { ArgumentError } = require('./ArgumentError');

class ArgumentMissingError extends ArgumentError {
  /**
   * @param {String} argument
   */
  constructor(argument) {
    super(`Required argument --${argument} is missing!`);
  }
}

module.exports = {
  ArgumentMissingError,
};