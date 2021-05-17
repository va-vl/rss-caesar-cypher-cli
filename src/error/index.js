const errors = require('./errors');
const { createErrorText } = require('./createErrorText');
const { showError } = require('./showError');

module.exports = {
  ...errors,
  createErrorText,
  showError,
};
