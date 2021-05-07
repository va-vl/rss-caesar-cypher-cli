const { Transform } = require('stream');
//
const { parseOptions } = require('./../options');
const { cypher } = require('./../cypher');

const { shift, action } = parseOptions();

class CaesarTransform extends Transform {
  _transform(chunk, _, cb) {
    const str = chunk.toString('utf-8');
    const result = cypher(str, shift, action);

    this.push(result);
    cb();
  }
}

const transformStream = () => new CaesarTransform();

module.exports = {
  transformStream,
}