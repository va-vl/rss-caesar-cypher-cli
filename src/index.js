const { pipeline } = require('stream');
//
const { validateOptions, parseOptions } = require('./options');
const { showGreeting } = require('./greeting');
const { showError } = require('./error');
const { inputStream, outputStream, TransformStream } = require('./streams');

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
