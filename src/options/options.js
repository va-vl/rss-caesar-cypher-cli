const { program } = require('commander');
//
const {
  validateAction,
  validateShift,
  validateInputOutput,
} = require('./validators');

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

  try {
    validateShift(shift);
    validateAction(action);
    validateInputOutput('input', input);
    validateInputOutput('output', output);
  } catch (err) {
    process.stderr.write(err.message);
    process.exit(9);
  }
};

const getPathString = (val) => (typeof val === 'string' ? val : null);

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
