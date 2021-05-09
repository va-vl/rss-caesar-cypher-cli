/* eslint-disable no-underscore-dangle */
const { Transform } = require('stream');
const { EOL } = require('os');
//
const { parseOptions } = require('../options');
const { cypher } = require('../cypher');

const { shift, action, output } = parseOptions();

class CaesarTransform extends Transform {
  _transform(chunk, _, cb) {
    const str = chunk.toString();
    const result = cypher(str, shift, action);

    this.push(result);
    cb();
  }

  _final() {
    if (output) {
      this.push(EOL);
    }
  }
}

const transformStream = () => new CaesarTransform();

module.exports = {
  transformStream,
};
