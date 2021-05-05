const chalk = require('chalk');
const boxen = require('boxen');

const getBoxenOptions = (align = 'left', borderColor = "green") => ({
  align,
  padding: 1,
  borderStyle: 'double',
  borderColor,
});

const greeting = chalk`{bold.white CAESAR CYPHER CLI TOOL}
made by va-z for RSS Node.js 2021Q2
{bold.red.italic Hello, ${process.env.USERNAME || 'user'}!}

This tool runs the Caesar Cipher algorithm on the provided input.
Enter {green --help} to see help.`;

const help = chalk`Commands (required in red, optional in white):
{bold.red --shift / -s} - shift (number)
{bold.red --action / -a} - action (decode / encode)
{bold.white --input / -i} - input (text or path to a text file)
{bold.white --output / -o} - output (path to a text file)

Example:
$ node rss-caesar-cypher-cli {bold.red -a encode} {bold.red -s 7} -i "./input.txt" -o "./output.txt"`

const showGreeting = () => {
  console.log(boxen(greeting, getBoxenOptions('center', 'magenta')));
}

const showHelp = () => {
  console.log(boxen(help, getBoxenOptions()))
}

module.exports = {
  showGreeting,
  showHelp,
}