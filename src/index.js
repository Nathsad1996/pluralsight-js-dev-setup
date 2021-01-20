let numeral = require('numeral');

const course = numeral(1000).format('$0,0.00')
console.log(`I would pay ${course} for this awesome course!`);