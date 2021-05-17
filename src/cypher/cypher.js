const { EN } = require('./langs');

// * This can be expanded to support multiple languages per cypher / language selection

/**
 * @param {String} character
 * @param {Number} shift
 * @returns {String}
 */
const getNewCharacter = (character, shift) => {
  const range = EN.reduce((acc, alphabet) => {
    const charIndex = alphabet.indexOf(character);

    return charIndex === -1 ? acc : ({
      alphabet,
      charIndex,
      length: alphabet.length,
    });
  }, null);

  if (range === null) {
    return character;
  }

  const { alphabet, charIndex, length } = range;
  const baseNewIndex = (charIndex + shift) % length;
  const newIndex = baseNewIndex + (baseNewIndex >= 0 ? 0 : length);

  return alphabet[newIndex];
};

/**
 * @param {String} source - string to process
 * @param {Number} shift
 * @param {'encode'|'decode'} mode
 * @returns {String}
 */
const cypher = (source, shift, mode) => {
  const correctedShift = mode === 'encode' ? shift : (-shift);
  const sourceLength = source.length;
  let result = '';

  for (let i = 0; i < sourceLength; i += 1) {
    result += getNewCharacter(source[i], correctedShift);
  }

  return result;
};

module.exports = {
  cypher,
};
