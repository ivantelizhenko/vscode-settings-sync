'use strict';

/*
////////////////////////////////////////////////
//Constructoring function:
const Person = function (firstName, birthYear) {
  this.firstName1 = firstName;
  this.birthYear = birthYear;

  //Never do this, because can do bad performance:
  // this.calcAge = () => {
  //   console.log(2037 - this.birthYear);
  // };
};
const jonas = new Person('Jonas', 1991);

// Four steps behind the scene:
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const mark = new Person('Mark', 2005);
const adam = new Person('Adam', 1988);

const jay = 'Jay';

// Static Methods(Constructoring function)
Person.hey = () => {
  console.log('Hey there 🫰🏻');
};
Person.hey();
// Hey there 🫰🏻

// Check
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false

//Prototype
console.log(Person.prototype);
//{constructor: ƒ}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge(); //46

//This two values is the same
console.log(jonas.__proto__ === Person.prototype);
//true

const ray = 'ray';
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(ray)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species); // Homo Sapiens

console.log(jonas.hasOwnProperty('firstName'));
//true
console.log(jonas.hasOwnProperty('species'));
//false

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
*/

/*
////////////////////////////////////////////////
//Coding Challenge

//  Data car 1: 'BMW' going at 120 km/h
//  Data car 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

console.log(`Brake: BMW: ${bmw.brake()}, Mercedes: ${mercedes.brake()}`);
console.log(
  `Accelerate: BMW: ${bmw.accelerate()}, Mercedes: ${mercedes.accelerate()}`
);
*/

/*
////////////////////////////////////////////////
//ES6 Classes:

//class expression
const PersonClExpression = class {};

// class declasration
class PersonCl {
  constructor(firstName, birthYear) {
    this.fullName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this.fullNameNew = name;
    else console.log('hey');
  }

  get fullName() {
    return this.fullNameNew;
  }

  // Static Methods(ES6 Classes)
  static hey() {
    console.log('Hey my dear ❤️');
  }
}

PersonCl.hey();
// Hey my dear ❤️

const jessica = new PersonCl('Jessica North', 1996);

//Can do, but better in class
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet(); // Hey Jessica

// 1. Classes are NOT hoisted
// 2. Class are first-class citizen
// 3. Classes are executed in strict mode

// *in ES6 Classes works the same ways*
const acoount = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  //getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //setter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(acoount.latest);
// 300 *number*

acoount.latest = 1;
console.log(acoount.movements);
// (5) [200, 530, 120, 300, 1]
*/

/*
////////////////////////////////////////////////
//Object.create():
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // {}

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); //35

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); //58
*/

/*
////////////////////////////////////////////////
//Coding Challenge 2
//'Ford' 120

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedMI) {
    return (this.speed = speedMI * 1.6);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS); // 75 - successfully
ford.speedUS = 150;
console.log(ford.speed); // 240 - successfully
*/

/*
///////////////////////////////////////////////
//Inheritance Between "Classes": Constructor Functions

// Parent prototype
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//Parent method
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Child prototype
const Student = function (firstName, birthYear, course) {
  //bad example(don`t do)
  this.firstName1 = firstName;
  this.birthYear = birthYear;
  //good example(best solution)
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes. But clear all child methods before
Student.prototype = Object.create(Person.prototype);

//fix bug
Student.prototype.constructor = Student;


//Child method
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

// Child object
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // works
mike.calcAge(); // works after linking
*/

/*
//////////////////////////////////////////////
// Coding Challenge 3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.charge -= 1;
  this.speed += 20;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
*/

/*
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
//Parent prototype
class PersonCl {
  constructor(firstName, birthYear) {
    this.fullName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this.fullNameNew = name;
    else console.log('hey');
  }
  get fullName() {
    return this.fullNameNew;
  }
  static hey() {
    console.log('Hey my dear ❤️');
  }
}

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!(super)
    super(fullName, birthYear);
    this.course = course;
  }

  //Add method to child prototype
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }

  //owerwrite method
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${2037 - this.birthYear}`
    );
  }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

/*
//////////////////////////////////////////////
// Inheritance Between "Classes": Object.create
//Parent prototype
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

//Child prototype
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
//Child method
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

//child object
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce(); // works
jay.calcAge(); // works after linked
*/

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

/*
class Account {
  // 1) Public fields(instances)
  locale = navigator.language;

  // 2) Private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Publuc methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
      return this;
    }
  }
  // 4) Privat methods
  // #approveLoan() { *will work soon*
  _approveLoan() {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
//Wrong!
// acc1._movements.push(200);
// acc1._movements.push(-140);
// console.log(acc1._movements);
// Right! (create methods)
acc1.deposit(250);
acc1.withdraw(-140);
console.log(acc1.getMovements());

//Chaining
// we canot do this...
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// without...
*/
///////////////////////////////////////////////
// Coding Challenge 3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.charge -= 1;
  this.speed += 20;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
///////////////////////////////////////////////

const 