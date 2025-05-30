'use strict';
/*
//Withou Default Values
const market1 = function (name, number, price) {
  const product = { name, number, price };
  console.log(product);
};
market1('Apple', 3, 20); // {name: 'Apple', number: 3, price: 20}
market1('Orange', 5); // {name: 'Orange', number: 5, price: undefined}

//With Default Values
const market2 = function (name, number = 1, price = 20 * number) {
  const product = { name, number, price };
  console.log(product);
};
market2('Orange', 5); // {name: 'Orange', number: 5, price: 100}

// We can skip argument
market2('Potato', undefined, 150);
//{name: 'Potato', number: 1, price: 150}
*/

/*
//Expression function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};
//First way
const greetHey = greet('Hey');
greetHey('Ivan'); // Hey Ivan!

//Second way
greet('Hello')('Mike'); // Hello Mike

//Arrow function
const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);
//First way
const greetHey2 = greet2('Hey');
greetHey2('Ivan'); // Hey Ivan

//Second way
greet2('Hi')('mom'); // Hi mom
*/

/*
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
// Jonas Schmedtmann booked a seat on Lufthansa flight LH239

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// The call and apply Methods
const book = lufthansa.book; // this is a function

// book(23, 'Sarah Williams'); // don`t work('this' is undefined)

// Call method
book.call(eurowings, 23, 'Sarah Williams');
//Sarah Williams booked a seat on Eurowings flight EW23
book.call(lufthansa, 239, 'Mary Cooper');
//Mary Cooper booked a seat on Lufthansa flight LH239

//Apply method(a little bit useless)
const arr = [23, 'Sarah Williams'];
book.apply(eurowings, arr);
//Sarah Williams booked a seat on Eurowings flight EW23
//We can do:
book.call(eurowings, ...arr);
//Sarah Williams booked a seat on Eurowings flight EW23 *the same result*

//Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Sarah Williams');
//Sarah Williams booked a seat on Eurowings flight EW23
bookLH(239, 'Mary Cooper');
//Mary Cooper booked a seat on Lufthansa flight LH239

//Fixed arguments
const bookEW23 = book.bind(eurowings, 23);
bookEW('Sarah Williams');
//Sarah Williams booked a seat on Eurowings flight EW23
bookEW('Jonas Schmedtmann');
//Jonas Schmedtmann booked a seat on Eurowings flight EW23

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//thisArg = null
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//Exercise:
const addVAT2 = function (rate1 = 0.23) {
  return function (value1) {
    return value1 + value1 * rate1;
  };
};
const newAddVAT2 = addVAT2();
console.log(newAddVAT2(100)); //123
console.log(newAddVAT2(23)); //28.29
*/

/*
// Coding challenge #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Java', '2: Rust', '3: C#'],
  answers: [0, 0, 0, 0],
  registerNewAnswer() {
    const answer = prompt(`${this.question}\n${this.options.join(
      '\n'
    )}\n(Write option number)
    `);
    console.log(answer);
    for (let i = 0; i < 4; i++) if (Number(answer) === i) this.answers[i]++;
    this.displayResults();
    this.displayResults(this.answers);
  },
  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};
// poll.displayResults([1, 2, 3, 4]);
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

*/

//Immediately Invoked Function Expressions (IIFE)

const run0Once = function () {
  console.log('this function wil');
};
