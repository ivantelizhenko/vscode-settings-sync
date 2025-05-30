class des {
  name;
  age;

  constructor(n) {
    this.name = n;
  }

  describe(age) {
    console.log(`${this.name} is ${age} y.o.`);
  }
}

const man = new des("Ivan");
man.describe(13);
