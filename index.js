const info = require('./information');
const cowsay = require('cowsay');

//console.log(cowsay.say(info.name + info.campus));

console.log(
  cowsay.say({
    text: `Hey there, my name is ${info.name}, and I'm a student in the Wild Code School. in the best ${info.campus}`,
    e: 'oO',
    T: 'U',
  })
);
