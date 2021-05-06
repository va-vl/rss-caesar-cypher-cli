const chalk = require('chalk');
const boxen = require('boxen');
//
const config = require('./config');

const greetingText = chalk`{bold.white CAESAR CYPHER CLI TOOL v.${config.getVersion()}}
made by va-z for RSS Node.js 2021Q2

{bold.red.italic Hello, ${config.getUserName()}!}

This tool runs the Caesar Cipher algorithm on the provided input.
Enter {green cypher --help} to see help.`;

const greetingOptionsBoxen = config.getOptionsBoxen({
  align: 'center',
  borderColor: 'magenta',
});

const greeting = boxen(greetingText, greetingOptionsBoxen);

const displayGreeting = () => {
  process.stdout.write(greeting);
};

const displayError = ({ message, code}) => {
  console.log(message, code);
}

module.exports = {
  displayGreeting,
  displayError,
}