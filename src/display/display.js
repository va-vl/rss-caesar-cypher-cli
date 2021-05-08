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
  margin: 1,
});

const greeting = boxen(greetingText, greetingOptionsBoxen);

const getErrorText = (message) => chalk`{red ${message}}

{green cypher --help} for help.`;

const errorOptionsBoxen = config.getOptionsBoxen({
  borderColor: 'red',
});

const showGreeting = () => {
  process.stdout.write(greeting);
};

const showError = ({ message }) => {
  const errorMessage = boxen(
    getErrorText(message),
    errorOptionsBoxen,
  );

  process.stderr.write(errorMessage);
}

module.exports = {
  showGreeting,
  showError,
}