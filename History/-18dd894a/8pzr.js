class des {
  name;
  #age;

  constructor(n) {
    this.name = n;
  }

  describe(age) {
    console.log(`${this.name} is ${age} y.o.`);
  }

  setAge(age) {
    this.#age = age;
  }
}

const man = new des("Ivan");
man.setAge(13);
man.#age = 23;
console.log(man);
