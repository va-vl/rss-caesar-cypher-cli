const fs = require('fs');
//
const {
  showArgumentValueError,
  showArgumentMissingError,
  showFileMissingError,
} = require('../errors');

/**
 * @param {String} name
 * @param {*} value
 */
const validateRequiredArgument = (name, value) => {
  if (value === undefined || value === 'true') {
    showArgumentMissingError(name);
  }
};

/**
 * @param {*} value
 */
const validateShift = (value) => {
  validateRequiredArgument('shift', value);

  if (parseInt(value, 10) !== Number(value)) {
    showArgumentValueError('shift', value);
  }
};

/**
 * @param {*} value
 */
const validateAction = (value) => {
  validateRequiredArgument('action', value);

  if (value !== 'encode' && value !== 'decode') {
    showArgumentValueError('action', value);
  }
};

/**
 * @param {String} path
 */
const validateInput = (path) => {
  if (path === undefined) {
    return;
  }

  if (path === true) {
    showArgumentValueError('input', path);
  }
};

const validateOutput = (path) => {
  if (path === undefined) {
    return;
  }

  if (path === true) {
    showArgumentValueError('output', path);
  }

  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch {
    showFileMissingError('output', path);
  }
};

module.exports = {
  validateShift,
  validateAction,
  validateInput,
  validateOutput,
};
