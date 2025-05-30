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

const emp = { name: "Max" };

if ("privileges" in emp) {
  console.log("hey");
} else {
  console.log("nope");
}
