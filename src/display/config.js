const pkg = require('../../package.json');

const optionsBoxenBase = {
  align: 'center',
  padding: 1,
  margin: 1,
  borderColor: 'green',
  borderStyle: 'double',
};

/**
 * @param {Object} config
 * @returns {Object}
 */
const getOptionsBoxen = (config) => ({
  ...optionsBoxenBase,
  ...config,
});

const getVersion = () => pkg.version;

const getUserName = () => process.env.USERNAME || 'user';

module.exports = {
  getOptionsBoxen,
  getVersion,
  getUserName,
};
