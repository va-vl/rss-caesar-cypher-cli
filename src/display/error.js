const chalk = require('chalk');
const boxen = require('boxen');
//
const config = require('./config');

const getErrorText = (message) => chalk`{red ${message}}

{green node . --help} for help.`;

const errorOptionsBoxen = config.getOptionsBoxen({
  borderColor: 'red',
});

const showError = ({ message }) => {
  const errorMessage = boxen(
    getErrorText(message),
    errorOptionsBoxen,
  );

  process.stderr.write(errorMessage);
};

module.exports = {
  showError,
};
