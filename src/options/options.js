const { program } = require('commander');
const path = require('path');
const chalk = require('chalk');
//
const { createErrorText } = require('../error');
const { validateOptions } = require('./validate');

const commanderOptions = program
  .configureOutput({
    outputError: (str, write) => write(createErrorText(str, true)),
  })
  .requiredOption('-s, --shift <integer>', 'cypher shift')
  .requiredOption('-a, --action <string>', '"encode" or "decode"')
  .option('-i, --input <string>', 'path to a text file')
  .option('-o, --output <string>', 'path to a text file')
  .name('node .')
  .usage('[options]')
  .addHelpText('after', chalk`
Example: {green $ node .} {red -s 1 -a encode} -i input.txt -o output.txt`)
  .addHelpText('afterAll', `
Passing unspecified options will result in an error!`)
  .parse();

const {
  shift, action, input, output,
} = commanderOptions.opts();

const getPathString = (val) => (typeof val === 'string'
  ? path.normalize(val)
  : null);

const options = {
  shift: parseFloat(shift),
  action,
  input: getPathString(input),
  output: getPathString(output),
};

validateOptions(options);

module.exports = { options };
