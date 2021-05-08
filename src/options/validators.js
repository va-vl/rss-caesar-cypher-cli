const fs = require('fs');
//
const {
  ArgumentMissingError,
  ArgumentValueError,
  FileAccessError,
  FileMissingError
} = require('./../errors');

/**
 * @param {String} name
 * @param {*} value
 */
const validateRequiredArgument = (name, value) => {
  if (value === undefined || value === 'true') {
    throw new ArgumentMissingError(name);
  }
}

/**
 * @param {*} value
 */
const validateShift = (value) => {
  validateRequiredArgument('shift', value);

  if (parseInt(value) !== Number(value)) {
    throw new ArgumentValueError('shift', value);
  }
};

/**
 * @param {*} value
 */
const validateAction = (value) => {
  validateRequiredArgument('action', value);

  if (value !== 'encode' && value !== 'decode') {
    throw new ArgumentValueError('action', value);
  }
};

const validateInputOutput = (name, path) => {
  if (path === undefined) {
    return;
  }

  if (path === true) {
    throw new ArgumentValueError(name, path);
  }

  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch {
    throw new FileMissingError(path);
  }

  try {
    fs.accessSync(path, fs.constants.R_OK && fs.constants.W_OK);
  } catch {
    throw new FileAccessError(path);
  }

  if (fs.statSync(path).isDirectory()) {
    throw new ArgumentValueError(name, 'directory path');
  }
};

module.exports = {
  validateShift,
  validateAction,
  validateInputOutput,
}