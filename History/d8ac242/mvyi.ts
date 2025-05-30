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
};

const product1: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

const product2 = {
  id: "def2",
  price: 22.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Orange Nutt",
    description: "A huge nutt - almost success!",
  },
};

console.log(person1.name + person2.name);
