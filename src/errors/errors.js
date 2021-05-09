const { showError } = require('../display');

const expectedValues = {
  shift: 'integer',
  action: '"encoded" or "decoded"',
  input: 'file path',
  output: 'file path',
};

const fixValue = (value) => (value === true ? 'none' : value);

/**
 * @param {String} argument
 * @param {String} value
 */
const showArgumentValueError = (argument, value) => {
  showError(
    `Invalid --${argument} value: ${fixValue(value)} provided, ${expectedValues[argument]} expected!`,
    9,
  );
};

/**
 * @param {String} argument
 */
const showArgumentMissingError = (argument) => {
  showError(`Required argument --${argument} is missing!`, 9);
};

/**
 * @param {String} argument
 * @param {String} path
 */
const showFileMissingError = (argument, path) => {
  showError(`The ${argument} file ${path} does not exist!`, 9);
};

/**
 * @param {String} argument
 * @param {String} path
 */
const showFileAccessError = (argument, path) => {
  showError(`The ${argument} file ${path} cannot be accessed!`, 9);
};

const showFileSameError = () => {
  showError('Input and output paths cannot lead to the same file!', 9);
};

module.exports = {
  showArgumentValueError,
  showArgumentMissingError,
  showFileMissingError,
  showFileAccessError,
  showFileSameError,
};
