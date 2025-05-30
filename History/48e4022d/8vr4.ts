interface Person {
  name: string | 12;
  age: number;

  greed: () => void;
}

interface Person {
  surname: string;
}

type PersonType = string | "Mark";

const user1: Person = {
  name: "Mark",
  surname: "Weloci",
  age: 7,
  greed: function () {
    console.log(`Hello ${this.name}`);
  },
};
// user1.greed();

/*
// Create
interface Name {
  variableName1: string;
  variableName2: number;
  variableName3(arg: string): void;
  readonly variableName4: string[]; // can add readonly;
}

// Can call again and add some new types
interface Name {
  variableName5: boolean;
}

// Use
const name: Name = {
  variableName1: "str",
  variableName2: 112233,
  variableName3(arg) {
    console.log(arg);
  },
  variableName4: ["a", "b", "c"],
  variableName5: true,
};
*/

/*
interface Name {
  readonly var: number;
  func(arg: string): void;
}

interface AnotherName {
  smth: string;
}

class Test {}

// Can 'implements' any number of interfaces
class ClassName extends Test implements Name, AnotherName {
  // Firstly we must add all variables from interfaces, and after we can add some new variables and functions
  var: number;
  smth: string;

  constructor(v: number, s: string, o: string, public oops: string) {
    super();
    this.var = v;
    this.smth = s;
  }

  func(arg: string): void {
    console.log(arg);
  }

  greet(message: string): void {
    console.log(message);
  }
}

const x = new ClassName(2, "s", "s", "o");
*/

/*
interface A {
  name: string;
}

interface B extends A {
  surname: string;
}

const x: B = {
  name: "Ivan",
  surname: "Telizhenko",
};
*/

/*
// 1. With type
type AddFn1 = (a: number, b: number) => number;

const add1: AddFn1 = (n1: number, n2: number) => {
  return n1 + n2;
};

// 2. With interface
interface AddFn2 {
  (a: number, b: number): number;
}

const add2: AddFn2 = (n1: number, n2: number) => {
  return n1 + n2;
};
*/

/*
// We can use optional parameters and properties(?)
class Persone {
  name?: string;

  constructor(n?: string, public surname?: string) {
    this.name = n;
  }
}
const me = new Persone("Ivan", "Telizhenko");
const friend = new Persone("Mark");
const someone = new Persone();
*/

interface X {
  name?: string;
  surname: string;
}
