const { pipeline } = require('stream');
//
const { options } = require('./options');
const { showGreeting } = require('./greeting');
const { showError } = require('./error');
const { inputStream, outputStream, TransformStream } = require('./streams');

const {
  shift, action, input, output,
} = options;

if (!input) {
  showGreeting();
}

if (input && output) {
  // TODO: showGreeting(input, output) outside of if clauses, remove both if clauses
  console.log('Successful with input and output files');
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
