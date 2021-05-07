const { program } = require('commander');
//
const {
  validateAction,
  validateShift,
  validateInputOutput
} = require('./validators');

let options = program
  .option('-s|--shift <integer>', 'cypher shift (required)')
  .option('-a|--action <string>', '"encode" or "decode" (required)')
  .option('-i|--input [string]', 'path to a text file')
  .option('-o|--output [string]', 'path to a text file')
  .addHelpText('afterAll', 'Passing unspecified options will result in an error!')
  .addHelpText('afterAll', `Example: {magenta cypher red -s 1 red -a encrypt -i input.txt -o output.txt}`)
  .parse();

const validateOptions = () => {
  const { shift, action, input, output } = options.opts();

  try {
    validateShift(shift);
    validateAction(action);
    validateInputOutput(input);
    validateInputOutput(output);
  } catch(err) {
    console.error(err.message);
  }
};

const parseOptions = () => {
  const { shift, action, input, output } = options.opts();

  return ({
    shift: parseInt(shift),
    action,
    input,
    output
  });
};

module.exports = {
  parseOptions,
  validateOptions,
};