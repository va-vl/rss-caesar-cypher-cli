const { cypher } = require('./model');
const { greeting } = require('./view');

const caesarCypherCli = () => {
  greeting.showGreeting();

  console.log(cypher('This is secret. Message about "_" symbol!', -1, 'encode'));
}

module.exports = {
  caesarCypherCli
};