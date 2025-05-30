class Departament {
  private employees: string[] = [];

  constructor(public name: string, protected id: string) {}

  describe(this: Departament) {
    console.log(`${this.name} - name`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

class ITDepartament extends Departament {
  constructor(id: string, name: string, public number: number) {
    super(name, id);
  }

  get everything(): string {
    return this.name + this.id + this.number;
  }

  set everythingWithArg(arg: string) {
    // console.log(arg);
  }

  showNumber() {
    console.log(this.number);
  }
}

const man = new Departament("11", "Andrew");
const itMan = new ITDepartament("IT", "name", 112233);
itMan.everythingWithArg = "show me";

/*
class FieldTypes {
  public a: string;
  private b: number;

  // here also can be private readonly, etc
  public readonly c: string[];

  //  not available from outside, but available for children
  protected d: string[];

  // available from outside, but not available for inheritance  
  static x: string = "My name is XF505";

  constructor(a: string, b: number, c: string[], d: string[]) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}
  */

/*
abstract class Base {
  // We can use abstract fields/functions only in abstract class
  abstract getName(): string;

  printName() {
    console.log(`Hello, ${this.getName()}`);
  }
}

// We cannot do this:
const notWork = new Base();
// Error: Cannot create an instance of an abstract class.

//So we should create a child class
class OnBase extends Base {
  constructor(public name: string) {
    super();
  }

  // And re-create this function, that base on parent class
  getName() {
    return this.name;
  }
}
const x = new OnBase("Olexandra");

x.printName();
// Output: Hello, Olexandra
*/

class Count