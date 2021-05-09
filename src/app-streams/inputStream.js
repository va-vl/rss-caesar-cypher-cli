const fs = require('fs');
//
const { parseOptions } = require('../options');
const {
  showFileMissingError,
  showFileAccessError,
  showArgumentValueError,
} = require('../errors');

const { input } = parseOptions();

const inputStream = () => {
  if (!input) {
    return process.stdin;
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
