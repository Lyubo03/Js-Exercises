//Here we're requiring an entire dir

const bmw = require('./bmw');
const bentley = require('./bentley');
const ford = require('./ford');

const allCars = [bmw, bentley, ford];

module.exports.allCars = allCars;