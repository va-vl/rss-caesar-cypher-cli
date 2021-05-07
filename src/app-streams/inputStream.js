const fs = require('fs');
//
const {} = require('../options');

const inputStream = () => {
  return process.stdin;
}

module.exports = {
  inputStream,
}