const { pipeline } = require('stream');
const { fs } = require('fs');
//
const { cypher } = require('./encryption');
const display = require('./display');
const optionsParser = require('./options');

display.displayGreeting();