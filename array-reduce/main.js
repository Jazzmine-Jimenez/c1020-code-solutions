/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(add);
console.log('sum:', sum);

const multiply = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(multiply);
console.log('product:', product);

const transactions = (total, currentValue) => {
  if (currentValue.type === 'deposit') { return total + currentValue.amount; } else {
    return total - currentValue.amount;
  }
};
const balance = account.reduce(transactions, 0);
console.log('balance:', balance);

const newObj = (accumulator, currentValue) => {
  return Object.assign(currentValue, accumulator);
};
const composite = traits.reduce(newObj, {});
console.log('composite:', composite);
