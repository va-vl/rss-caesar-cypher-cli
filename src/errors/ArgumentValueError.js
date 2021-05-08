const { ArgumentError } = require('./ArgumentError');

const expectedValues = {
  'shift': 'integer',
  'action': '"encoded" or "decoded"',
  'input': 'file path',
  'output': 'file path',
};

const fixValue = (value) => value === true ? 'nothing' : value;

class ArgumentValueError extends ArgumentError {
  /**
   * @param {String} argument
   * @param {*} value
   */
  constructor(argument, value) {
    super(
      `Invalid --${argument} value: ${fixValue(value)} provided, ${expectedValues[argument]} expected!`
    );
  }
}

module.exports = {
  ArgumentValueError,
};