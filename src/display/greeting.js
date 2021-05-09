const chalk = require('chalk');
const boxen = require('boxen');
//
const config = require('./config');

const isOutputText = chalk`{bold Enter} adds a new line. {bold.red Ctrl + C} to finish the input and append text to your output file.`;
const noOutputText = chalk`{bold Enter} to encrypt the current line. {bold.red Ctrl + C} to exit.`;

const getGreetingText = (isOutput) => chalk`{bold.white CAESAR CYPHER CLI TOOL v.${config.getVersion()}}
made by va-z for RSS Node.js 2021Q2

{bold.red Hello, ${config.getUserName()}!}

This tool runs the Caesar Cipher algorithm on the provided input.
No input file provided, running in {bold.red stdin} mode.

Input your text into the terminal. ${isOutput ? isOutputText : noOutputText}`;

const greetingOptionsBoxen = config.getOptionsBoxen({
  borderColor: 'magenta',
});

const showGreeting = (isOutput) => {
  const greeting = boxen(getGreetingText(isOutput), greetingOptionsBoxen);
  process.stdout.write(greeting);
};

module.exports = {
  showGreeting,
};
