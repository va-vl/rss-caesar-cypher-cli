const package = require('../../package.json');

const optionsBoxenBase = {
  align: 'center',
  borderColor: 'green',
  borderStyle: 'double',
  padding: 1,
};

/**
 * @param {Object} config
 * @returns {Object}
 */
const getOptionsBoxen = (config) => ({
  ...optionsBoxenBase,
  ...config
});

const getVersion = () => package.version;

const getUserName = () => process.env.USERNAME || 'user';

module.exports = {
  getOptionsBoxen,
  getVersion,
  getUserName,
}