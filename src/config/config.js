const pkg = require('../../package.json');

const { version } = pkg;
const userName = process.env.USERNAME || 'user';

const optionsBoxenBase = {
  align: 'center',
  padding: 1,
  margin: 1,
  borderColor: 'green',
  borderStyle: 'double',
};

/**
 * @param {Object} configs
 * @returns {Object}
 */
const getOptionsBoxen = (configs) => ({
  ...optionsBoxenBase,
  ...configs,
});

module.exports = {
  version,
  userName,
  getOptionsBoxen,
};
