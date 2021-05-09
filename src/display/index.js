const greeting = require('./greeting');
const error = require('./error');

module.exports = {
  ...greeting,
  ...error,
};
