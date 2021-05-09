class ArgumentError extends Error {
  constructor(...args) {
    super(...args);

    this.name = this.constructor.name;
    this.code = 'ERR_INVALID_ARGUMENTS';
  }
}

module.exports = {
  ArgumentError,
};
