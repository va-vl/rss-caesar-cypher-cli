const fs = require('fs');
//
const { parseOptions } = require('./../options');

const { input, output } = parseOptions();

const outputStream = () => {
  console.log(input);

  return output
    ? fs.createWriteStream(output, { flags: 'a' })
    : process.stdout;
};

module.exports = {
  outputStream,
}