/* eslint-disable no-underscore-dangle */
const { Transform } = require('stream');
const { EOL } = require('os');
//
const { cypher } = require('../cypher');

class TransformStream extends Transform {
  /**
   * @param {Number} shift
   * @param {String} action
   * @param {String | null} output
   */
  constructor(shift, action, output) {
    super();
    this.shift = shift;
    this.action = action;
    this.output = output;
  }

  _transform(chunk, _, cb) {
    const str = chunk.toString();
    const result = cypher(str, this.shift, this.action);

    this.push(result);
    cb();
  }

  _final() {
    if (this.output) {
      this.push(EOL);
    }
  }
}

module.exports = {
  TransformStream,
};
