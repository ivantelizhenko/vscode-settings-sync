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
function Log(target: unknown, propName: string | Symbol) {
  console.log(target);
  console.log(propName);
}

function Log2(
  target: unknown,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propName);
  console.log(descriptor);
}

class Product {
  @Log
  title: string;

  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else throw new Error('Value must be greater than 0.');
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log2
  getPriceWithTax(@Log tax: number) {
    return this._price * (1 * tax);
  }
}

const x = new Product('titleTest', 200);
