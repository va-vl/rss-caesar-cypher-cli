const fs = require('fs');
//
const { parseOptions } = require('./../options');

const { output } = parseOptions();

console.log(output);

const outputStream = () => {
  return output
    ? fs.createWriteStream(output, { flags: 'a' })
    : process.stdout;
};

module.exports = {
  outputStream,
}