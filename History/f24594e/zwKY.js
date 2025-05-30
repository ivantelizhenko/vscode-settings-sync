'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//DISPLAY MOVEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// DISPLAY SUMMARY
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = interest;
};

//SHOW BALANCE
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//CREATE USERNAME

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word.at(0))
      .join('');
  });
};
createUsernames(accounts);
//Update Ui
const updateUi = function (acc) {
  //Display balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
  //Display Movements
  displayMovements(acc.movements);
};
//EVENT HANDLER
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  //Current Account find
  currentAccount = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );

  if (currentAccount) {
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    updateUi(currentAccount);
    //Display UI and messege
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}!`;
  }
});

//EVENT TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //ADD MOVEMENTS
  if (
    currentAccount.balance >= amount &&
    amount > 0 &&
    currentAccount.username !== receiverAcc.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUi(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
});

//Event loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);

    //Update ui
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

//EVENT DEKETE ACC
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (currentAccount.username === username && currentAccount.pin === pin) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
});

//Event Sort
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  const whatSort = false ? true : false;
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
  console.log('heeey');
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//forEach method (Arrays)
//First solution(worst)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: Your deposite ${movement}`);
  else console.log(`Movement ${i + 1}: Your withdrew ${Math.abs(movement)}`);
}

//Second solution(better)
movements.forEach(function (move, i, arr) {
  if (move > 0) console.log(`Movement ${i + 1}: Your deposite ${move}`);
  else console.log(`Movement ${i + 1}: Your withdrew ${Math.abs(move)}`);
});
//0:function(200)
//1:function(450)
//2:function(-400)
//3:function(300)
//...
*/

/*
//forEach method (Set)
const set = new Set(['a', 'b', 'e', 's', 'b', 'e']);
console.log(set);
set.forEach(function (value1, value2, set) {
  console.log(`${value1}=${value2}`);
  // value1 = value2. Always
});

set.forEach(function (value, _, set) {
  console.log(`${value}=${value}`);
  //we can skip second Argumnet
});
*/

/*
//Coding challenge 1
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
  const dogs = [...dogsJulia.slice(1, -2), ...dogsKate];

  dogs.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(
          `Dog number ${i + 1} is still puppy, and is ${dog} years old`
        );
  });
};
console.log('DATA 1');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('DATA 2');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*
//arr.map method
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (curr, i, arr) {
  return Math.trunc(curr * eurToUsd);
  //(8) [220, 495, -440, 3300, -715, -143, 77, 1430]
  return 23;
  //(8) [23, 23, 23, 23, 23, 23, 23, 23] *else we can do it*
});

//Or arrow(better)(the same)
const movementsUSD2 = movements.map(curr => Math.trunc(curr * eurToUsd));
/*

/*
// arr.filter method
const deposit = movements.filter(function (curr, i, arr) {
  return curr > 0; //use boolean for return each element
  //(5) [200, 450, 3000, 70, 1300]
});

//or arrow(better)(mechanism is the same)
const withdrawals = movements.filter(curr => curr < 0);
//(3) [-400, -650, -130]
*/

/*
//arr.reduce method
const balance = movements.reduce(function (acc, curr, i, arr) {
  return acc + curr; //3840
}, 0);

//Or arrow(the same)
const balance2 = movements.reduce((acc, curr) => acc + curr, 0);

//one more example
console.log(movements);
//(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
const showMax = movements.reduce(
  (acc, cur) => (acc < cur ? cur : acc),
  movements[0]
  //3000
);
const showMin = movements.reduce(
  (acc, cur) => (acc < cur ? acc : cur),
  movements[0]
  //-650
);
*/

/*
//Coding challenge 2
const ages = ages => {
  const humanAge = ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(humanAge);
};
ages([5, 2, 4, 1, 15, 8, 3]);
ages([16, 6, 10, 5, 6, 1,  4]);
*/

/*
// arr.flat() method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
//(8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.flat(1)); //default
//(8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.flat(0));
//(4) [Array(3), Array(3), 7, 8]

const arrDeeper = [[1, [2, 3]], [4, [5, 6]], 7, 8];
console.log(arrDeeper.flat());
//(6)[(1, Array(2), 4, Array(2), 7, 8)];
console.log(arrDeeper.flat(2));
//(8) [1, 2, 3, 4, 5, 6, 7, 8]
*/

/*
//arr.sort method
//Strings (sort by alphabet a-z)
const owners = ['Zach', 'Adam', 'Mark', 'Ben'];
console.log(owners.sort());
//(4) ['Adam', 'Ben', 'Mark', 'Zach']
console.log(movements.sort());
//(8) [-130, -400, -650, 1300, 200, 3000, 450, 70]

//Numbers
console.log(movements);
//(8) [200, 450, -400, 3000, -650, -130, 70, 1300]

//return < 0, A, B (keep order)
//return > 0, B, A (switch order)

//Descending (the same for both)
console.log(movements.sort((a, b) => (a < b ? 1 : -1)));
console.log(movements.sort((a, b) => b - a));
// (8) [3000, 1300, 450, 200, 70, -130, -400, -650]

//Ascending (the same for both)
console.log(movements.sort((a, b) => (a > b ? 1 : -1)));
console.log(movements.sort((a, b) => a - b));
//(8) [-650, -400, -130, 70, 200, 450, 1300, 3000]
*/

/*
const newArr = new Array(10); // array with 10 emply element:
console.log(newArr); //(10) [пусто × 10]

newArr.fill(1); // this 10 empty element equal 1(every):
console.log(newArr); //(10) [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

newArr.fill(7, 3, 9); // work like arr.splice
console.log(newArr); //(10) [1, 1, 1, 7, 7, 7, 7, 7, 7, 1]

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //(7) [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); //(7) [1, 2, 3, 4, 5, 6, 7]

const random = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);
console.log(random); //arr with 100 random numbers from 1 to 6

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  //(8) [-460, 400, 50, -20, -300, 340, -200, 200]
});
*/

/*
//Array Methods Practice
//1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr);
console.log(bankDepositSum);

//2.
//first solution
// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposit1000);

// second solution
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? acc + 1 : acc), 0);
console.log(numDeposit1000);

let a = 10;
a--;
console.log(a);

//3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, curr) => {
      //first solution
      // curr > 0 ? (acc.deposits += curr) : (acc.withdrawals += curr);
      //second solution
      acc[curr > 0 ? 'deposits' : 'withdrawals'] += curr;

      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//4.
//this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'and', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (!exceptions.includes(word) ? capitalize(word) : word))
    .join(' ');

  console.log(capitalize(titleCase));
};

convertTitleCase('this is a nice title');
convertTitleCase('this is a LONG title but not to long');
convertTitleCase('and here is another title with an EXAMPLE');
*/

//coding Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  (dog, i) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

// 2.
//Sarah test
const [sarahDog] = dogs.filter(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah\'s dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join('and ')}'s dogs eat too little`);

// 5.
console.log('Fiveth');
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log('Sixth');
console.log;
dogs.some(
  dog =>
    dog.curFood < dog.recommendedFood * 1.1 &&
    dog.curFood > dog.recommendedFood * 0.9
);

// 7.
console.log('Seventh');
const [goodBoy] = dogs.filter(
  dog =>
    dog.curFood < dog.recommendedFood * 1.1 &&
    dog.curFood > dog.recommendedFood * 0.9
);
console.log(goodBoy);

// 8.
const dogsNew = dogs;
const onlyRecommendedFood = [];
dogsNew.forEach(need => onlyRecommendedFood.push(need.recommendedFood));
console.log(onlyRecommendedFood.sort((a, b) => (a > b ? 1 : -1)));
///////////////////////////////////
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
