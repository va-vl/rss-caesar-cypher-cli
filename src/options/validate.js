const fs = require('fs');
const path = require('path');
//
const {
  showArgumentValueError,
  showArgumentMissingError,
  showFileMissingError,
  showFileSameError,
} = require('../error');

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
const validateInput = (inputPath) => {
  if (inputPath === undefined) {
    return;
  }

  if (inputPath === true) {
    showArgumentValueError('input', inputPath);
  }
};

const validateOutput = (outputPath) => {
  if (outputPath === undefined) {
    return;
  }

  if (outputPath === true) {
    showArgumentValueError('output', outputPath);
  }

  try {
    fs.accessSync(outputPath, fs.constants.F_OK);
  } catch {
    showFileMissingError('output', outputPath);
  }
};

const validateSameInputOutput = (inputPath, outputPath) => {
  if (typeof inputPath !== 'string' || typeof outputPath !== 'string') {
    return;
  }

  const resolvedInputPath = path.resolve(inputPath);
  const resolvedOutputPath = path.resolve(outputPath);

  if (resolvedInputPath === resolvedOutputPath) {
    showFileSameError();
  }
};

module.exports = {
  validateShift,
  validateAction,
  validateInput,
  validateOutput,
  validateSameInputOutput,
};
