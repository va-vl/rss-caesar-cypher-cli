const chalk = require('chalk');
const boxen = require('boxen');
//
const config = require('../config');

const commonText = chalk`{bold.white CAESAR CYPHER CLI TOOL v.${config.version}}
  made by va-z for RSS Node.js 2021Q2

  {bold.red Hello, ${config.userName}!}

  This tool runs the Caesar Cipher algorithm on the provided input.

  `;
const noInputNoOutputText = chalk`No input file provided, running in {bold.red stdin} mode.

{bold Enter} to process the current line and start a new one. {bold.red Ctrl + C} to quit.`;

const createIsInputIsOutputText = (input, output) => chalk`Processing contents of ${input} to ${output}`;
const createIsInputNoOutputText = (input) => chalk`Processing contents of ${input} to console.`;
const createNoInputIsOutputText = (output) => chalk`No input file provided, running in {bold.red stdin} mode.

{bold Enter} adds a new line. {bold.red Ctrl + C} to finish the input and append to ${output}`;

const getGreetingText = (input, output) => {
  if (input && output) {
    return commonText + createIsInputIsOutputText(input, output);
  }

  if (input && !output) {
    return commonText + createIsInputNoOutputText(input);
  }

  if (!input && output) {
    return commonText + createNoInputIsOutputText(output);
  }

  return commonText + noInputNoOutputText;
};

/**
 * @param {String|null} input
 * @param {String|null} output
 */
const showGreeting = (input, output) => {
  const greeting = boxen(
    getGreetingText(input, output),
    config.getOptionsBoxen({
      borderColor: input && output ? 'magenta' : 'blue',
    }),
  );

  process.stdout.write(greeting);
};

module.exports = {
  showGreeting,
};
