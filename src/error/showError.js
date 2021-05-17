const { createErrorText } = require('./createErrorText');

/**
 * @param {String} message
 * @param {Number} [code=10]
 */
const showError = (message, code = 10) => {
  process.stderr.write(createErrorText(message));
  process.exit(code);
};

module.exports = {
  showError,
};
