const chalk = require('chalk');
const boxen = require('boxen');
//
const config = require('./config');

const getErrorText = (message) => chalk`{red ${message}}

{green node . --help} for help.`;

const errorOptionsBoxen = config.getOptionsBoxen({
  borderColor: 'red',
});

const showError = (message, code = 10) => {
  const errorMessage = boxen(
    getErrorText(message),
    errorOptionsBoxen,
  );

  process.stderr.write(errorMessage);
  process.exit(code);
};

const getErrorString = (str) => {
  const errorString = str[0].toUpperCase() + str.slice(1);

  return boxen(
    getErrorText(errorString),
    errorOptionsBoxen,
  );
};

module.exports = {
  showError,
  getErrorString,
};
