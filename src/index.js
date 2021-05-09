const { pipeline } = require('stream');
//
const { validateOptions, parseOptions } = require('./options');
const { showError, showGreeting } = require('./display');
const { inputStream, transformStream, outputStream } = require('./app-streams');

validateOptions();

if (!(parseOptions().input)) {
  showGreeting();
}

pipeline(
  inputStream(),
  transformStream(),
  outputStream(),
  (err) => {
    if (err) {
      showError(err.message);
    }
  },
);
