const chalk = require('chalk');
const boxen = require('boxen');
const config = require('../config');

/**
 * @param {String} str
 */
const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

const errorOptionsBoxen = config.getOptionsBoxen({
  borderColor: 'red',
});

/**
 * @param {String} message
 * @param {Boolean} [needsCapitalizing=false]
 */
const createErrorText = (message, needsCapitalizing = false) => {
  const errorString = chalk`{red ${needsCapitalizing ? capitalize(message) : message}}

{green node . --help} for help.`;

  return boxen(
    errorString,
    errorOptionsBoxen,
  );
};

module.exports = {
  createErrorText,
};
