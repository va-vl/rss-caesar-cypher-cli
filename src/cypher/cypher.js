const ALPHABET_LENGTH = 26;
const CODE_POINT_RANGES = [
  [97, 122],
  [65, 90],
];

/**
 * @param {String} character
 * @param {Number} shift
 * @returns {Number}
 */
const getNewCharacter = (character, shift) => {
  const code = character.codePointAt(0);
  const range = CODE_POINT_RANGES.reduce((acc, [min, max]) => (
    ((code >= min) && (code <= max))
      ? [min, max]
      : acc
  ),
  null);

  if (range === null) {
    return character;
  }

  const [min, max] = range;
  const baseCode = code - min;
  const baseNewCode = (baseCode + shift) % ALPHABET_LENGTH;
  const newCode = ((baseNewCode >= 0) ? min : (max + 1)) + baseNewCode;

  return String.fromCodePoint(newCode);
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
