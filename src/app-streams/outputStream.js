const fs = require('fs');
//
const { parseOptions } = require('../options');

const { output } = parseOptions();

const outputStream = () => (output
  ? fs.createWriteStream(output, { flags: 'a' })
  : process.stdout);

module.exports = {
  outputStream,
};
