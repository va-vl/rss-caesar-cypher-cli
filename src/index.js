const { pipeline } = require('stream');
//
const { showGreeting } = require('./display');
const { inputStream, transformStream, outputStream } = require('./app-streams');

showGreeting();

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