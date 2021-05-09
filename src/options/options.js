const { program } = require('commander');
const path = require('path');
//
const {
  validateShift,
  validateAction,
  validateInput,
  validateOutput,
  validateInputOutput,
} = require('./validate');

const options = program
  .option('-s, --shift <integer>', 'cypher shift')
  .option('-a, --action <string>', '"encode" or "decode"')
  .option('-i, --input <string>', 'path to a text file')
  .option('-o, --output <string>', 'path to a text file')
  .name('node .')
  .usage('[options]')
  .addHelpText('afterAll', `
Passing unspecified options will result in an error!`)
  .addHelpText('afterAll', `
Example: node . -s 1 -a encode -i input.txt -o output.txt`)
  .parse();

const validateOptions = () => {
  const {
    shift, action, input, output,
  } = options.opts();

  validateShift(shift);
  validateAction(action);
  validateInput(input);
  validateOutput(output);
  validateInputOutput(input, output);
};

const getPathString = (val) => (typeof val === 'string'
  ? path.normalize(val)
  : null);

const parseOptions = () => {
  const {
    shift, action, input, output,
  } = options.opts();

  return ({
    shift: parseInt(shift, 10),
    action,
    input: getPathString(input),
    output: getPathString(output),
  });
};

module.exports = {
  parseOptions,
  validateOptions,
};
