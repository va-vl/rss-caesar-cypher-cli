const { pipeline } = require('stream');
//
const { showError } = require('./display');
const { inputStream, transformStream, outputStream } = require('./app-streams');

pipeline(
  inputStream(),
  transformStream(),
  outputStream(),
  (err) => {
    if (err) {
      showError(err);
      process.exit(10);
    }
  },
);
