const { pipeline } = require('stream');
//
const { inputStream, transformStream, outputStream } = require('./app-streams');

pipeline(
  inputStream(),
  transformStream(),
  outputStream(),
  (err, val) => {
    console.log('asdfasdf');

    if (err) {
      console.log(err);
    } else {
      console.log(val);
    }
  },
)