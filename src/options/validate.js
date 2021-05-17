const fs = require('fs');
//
const {
  showArgumentValueError,
  showFileMissingError,
  showFileSameError,
} = require('../error');

/**
 * @param {Number} value
 */
const validateShift = (value) => {
  if (!Number.isInteger(value)) {
    showArgumentValueError('shift', value);
  }
};

/**
 * @param {String} value
 */
const validateAction = (value) => {
  if (value !== 'encode' && value !== 'decode') {
    showArgumentValueError('action', value);
  }
};

/**
 * @param {String} outputPath
 */
const validateOutput = (outputPath) => {
  if (outputPath === null) {
    return;
  }

  try {
    fs.accessSync(outputPath, fs.constants.F_OK);
  } catch {
    showFileMissingError('output', outputPath);
  }
};

/**
 * @param {String} inputPath
 * @param {String} outputPath
 */
const validateSameInputOutput = (inputPath, outputPath) => {
  if (inputPath === null || outputPath === null) {
    return;
  }

  if (inputPath === outputPath) {
    showFileSameError();
  }
};

/**
 * @param {Object} options
 * @param {Number} options.shift
 * @param {*} options.action
 * @param {String|null} options.input
 * @param {String|null} options.output
 */
const validateOptions = ({
  shift, action, input, output,
}) => {
  validateShift(shift);
  validateAction(action);
  validateOutput(output);
  validateSameInputOutput(input, output);
};

module.exports = {
  validateOptions,
};
