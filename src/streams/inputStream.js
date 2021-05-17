const fs = require('fs');
const chalk = require('chalk');
//
const {
  showFileMissingError,
  showFileAccessError,
  showArgumentValueError,
} = require('../error');

const writeYourInput = () => process.stdout.write(
  chalk.greenBright('Your input: '),
);

const inputStream = (input) => {
  if (!input) {
    writeYourInput();

    return process.stdin.on('data', () => {
      setImmediate(writeYourInput);
    });
  }

  const stream = fs.createReadStream(input);

  stream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      showFileMissingError('input', input);
    }

    if (err.code === 'EPERM') {
      showFileAccessError('input', input);
    }

    if (err.code === 'EISDIR') {
      showArgumentValueError('input', 'directory');
    }
  });

  return stream;
};

module.exports = {
  inputStream,
};
