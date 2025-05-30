const product1: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "def2",
  price: 22.99,
  tags: ["great-wall", "hot-and-new"],
  details: {
    title: "Orange Nutt",
    description: "A huge nutt - almost success!",
  },
};

const product2 = {
  id: "def2",
  price: 22.99,
  tags: ["great-wall", "hot-and-new"],
  details: {
    title: "Orange Nutt",
    description: "A huge nutt - almost success!",
  },
};

const person1: {
  name: string;
  age: number;
} = {
  name: "Ivan",
  age: 14,
};

const person2 = {
  name: "Maria",
  age: 6,
  hobbies: ["str", "str"],
};

let array1: string[]; // Array with string values only
array1 = ["str", "str"];

let array2: any[]; // Array with any values
array2 = [1, "str"];

console.log(array1, array2);

const example: {
  stringEx: string;
  numberEx: number;
  arrDefineEx: string[];
  arrAnyEx: any[];
  objEx: { num: number; word: string };
  tupleEx: [string, number, boolean];
} = {
  stringEx: "",
  numberEx: 5,
  arrDefineEx: ["str", "str"],
  arrAnyEx: ["str", 1],
  objEx: { num: 1, word: "car" },
  tupleEx: ["str", 0, false],
};

enum Name1 {
  HEY,
  HELLO,
  WATSUP,
}
// Output: {0: 'HEY', 1: 'HELLO', 2: 'WATSUP', HEY: 0, HELLO: 1, WATSUP: 2}

enum Name2 {
  HEY = 2,
  HELLO,
  WATSUP,
}
// Output: {0: 'HEY', 1: 'HELLO', 2: 'WATSUP', HEY: 0, HELLO: 1, WATSUP: 2}
console.log(Name2);
