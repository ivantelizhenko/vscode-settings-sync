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
  constructor(id) {
    super(age);
  }
}

const newMan = new secondDes();
console.log(newMan);
