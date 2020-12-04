/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const p = takeAChance('Jazzmine');

p.then(value => {
  console.log(value);
});

p.catch(error => {
  console.error(error);
});
