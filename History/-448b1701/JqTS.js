'use strict';
// 'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBunget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBunget2 = addExpense(
  newBunget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBunget3 = addExpense(newBunget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBunget1);
console.log(newBunget2);
console.log(newBunget3);

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(100);

// const arr = [2, 3, 5, 7, 4, 6, 8, 6, 4, 12];
// const arrNew = new Set(arr.filter(n => (n % 2 === 0 ? true : false)));

// console.log(arr);
// console.log(arrNew);
