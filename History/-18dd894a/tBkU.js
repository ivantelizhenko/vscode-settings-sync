class des {
  name;
  age;

  constructor(n) {
    this.name = n;
  }

  describe() {
    console.log(`${this.name} is ${this.age} y.o.`);
  }

  setAge(age) {
    this.age = age;
  }
}

const man = new des("Ivan");
class secondDes extends des {
  constructor(age) {
    super(age, "hey");
  }
}

const newMan = new secondDes();
// console.log(newMan);

class X {
  name;
  constructor() {}
}
const test = new X();
// console.log(test);

const person1 = { name: "Max", car: "Ford" };
const person2 = { name: "Elizabet", horse: "black" };

if ("car" in person1) {
  console.log("I have a car");
} else {
  console.log("I don't have a car");
}
