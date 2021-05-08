const fs = require('fs');
//
const { validateOptions, parseOptions } = require('../options');
const display = require('../display');

const inputStream = () => {
  try {
    validateOptions();
  } catch (err) {
    if (err.code === 'ERR_INVALID_ARGUMENTS') {
      display.showError(err);
      process.exit(9);
    } else {
      throw err;
    }
  }

  const { input } = parseOptions();

  return input ? fs.createReadStream(input) : process.stdin;
}

module.exports = {
  inputStream,
}