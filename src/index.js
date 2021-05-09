const { pipeline } = require('stream');
//
const { validateOptions, parseOptions } = require('./options');
const { showError, showGreeting } = require('./display');
const { inputStream, outputStream, TransformStream } = require('./app-streams');

validateOptions();

const {
  shift, action, input, output,
} = parseOptions();

if (!input) {
  showGreeting();
}

pipeline(
  inputStream(input),
  new TransformStream(shift, action, output),
  outputStream(output),
  (err) => {
    if (err) {
      showError(err.message);
    }
  },
);
