const { program } = require('commander');
const chalk = require('chalk');

const options = program
  .option('-s, --shift <number>', 'cypher shift (required)')
  .option('-a, --action <type>', '"encode" or "decode" (required)')
  .option('-i, --input [path|text|none]', 'text or path to a text file')
  .option('-o, --output [path|none]', 'path to a text file')
  .addHelpText('afterAll', 'Passing unspecified options will result in an error!')
  .addHelpText('afterAll', chalk`
Example: {magenta cypher red -s 1 red -a encrypt -i input.txt -o output.txt}`);

const getOptions = () => options.parse().opts();

const validateOptions = (args) => {
  const { shift, action, input, output } = args;

  console.log('hello world')
}

module.exports = {
  options,
  getOptions,
  validateOptions,
};