const { pipeline } = require('stream');
//
const { options } = require('./options');
const { showGreeting } = require('./greeting');
const { showError } = require('./error');
const { inputStream, outputStream, TransformStream } = require('./streams');

const {
  shift, action, input, output,
} = options;

showGreeting(input, output);

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
