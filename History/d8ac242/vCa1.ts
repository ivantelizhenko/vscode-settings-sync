t product1: {
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

let array: string[]; // array with strings only 
array.push(1)

console.log(person1.name + person2.name);

