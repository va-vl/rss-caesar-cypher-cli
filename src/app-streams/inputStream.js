const fs = require('fs');
//
const { validateOptions, parseOptions } = require('../options');
const { showGreeting } = require('../display');

const { input, output } = parseOptions();

const inputStream = () => {
  validateOptions();

  if (input) {
    return fs.createReadStream(input);
  }

  showGreeting(output);

  return process.stdin;
};

module.exports = {
  inputStream,
};
