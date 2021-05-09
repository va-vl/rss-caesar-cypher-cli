const fs = require('fs');
//
const {
  showFileAccessError,
  showArgumentValueError,
} = require('../errors');

const outputStream = (output) => {
  if (!output) {
    return process.stdout;
  }

  const stream = fs.createWriteStream(output, { flags: 'a' });

  stream.on('error', (err) => {
    if (err.code === 'EPERM') {
      showFileAccessError('output', output);
    }

    if (err.code === 'EISDIR') {
      showArgumentValueError('output', 'directory');
    }
  });

  return stream;
};

module.exports = {
  outputStream,
};
