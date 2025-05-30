/*
// Decorator factory(can be args)
function Logger(str: string) {
  // here function, that return decorator

  return function (constructor: Function) {
    // here decorator. As i understand, we should do all actions here

    console.log(str);
    console.log('Logging...');
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: Function) {
    console.log("i'm first!");
    const hookEl = document.getElementById(hookId);

    if (hookEl) {
      hookEl.innerHTML = `${hookEl.innerHTML} ${template}`;
    }
  };
}

@Logger('hey there!')
@WithTemplate("<h1>I'm a person<h1>", 'app')
class Person {
  name = 'Ivan';

  constructor() {
    console.log('Creating person object.');
  }
}

@WithTemplate("<h1>I'm Nick. I'm child!</h1>", 'app')
class Child {
  name = 'Nick';
  constructor() {
    console.log("I'm Nick");
  }
}

*/

// ---
// ---

function Log0(constructor: Function) {
  console.log('Class decorator!');
  console.log(constructor);
}

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}
@Log0
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function AutoBinding(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bindFn = originalFn.bind(this);
      return bindFn;
    },
  };

  return adjDescriptor;
}

class Print {
  message = 'i clicked';

  @AutoBinding
  showMessage() {
    console.log(this.message);
  }
}

const p = new Print();
const button = document.querySelector('button') as HTMLButtonElement;

button.addEventListener('click', p.showMessage);
