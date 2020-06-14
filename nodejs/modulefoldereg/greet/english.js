var greetings = require('./greetings.json');
var english = () => {
    console.log(greetings.en);
};

module.exports = english;