const { pipeline } = require('stream');
//
const { inputStream, transformStream, outputStream } = require('./app-streams');

pipeline(
  inputStream(),
  transformStream(),
  outputStream(),
  (err, val) => {
    if (err) {
      console.log(err);
    } else {
      console.log(val);
    }
  },
)