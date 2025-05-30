// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY');
//   return function<T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         console.log('Rendering template');
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// // @Logger('LOGGING - PERSON')
// @Logger('LOGGING')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const pers = new Person();

// console.log(pers);

// // ---

// function Log(target: any, propertyName: string | Symbol) {
//   console.log('Property decorator!');
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Accessor decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('Method decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log('Parameter decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error('Invalid price - should be positive!');
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// const p1 = new Product('Book', 19);
// const p2 = new Product('Book 2', 29);

// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     }
//   };
//   return adjDescriptor;
// }

// class Printer {
//   message = 'This works!';

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();
// p.showMessage();

// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage);

// ---

// interface ValidatorConfig {
//   [property: string]: {
//     [validatableProp: string]: string[]; // ['required', 'positive']
//   };
// }

// const registeredValidators: ValidatorConfig = {};

// function addValidator() {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['required'],
//   };
//  }

// function Required(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['required'],
//   };
// }

// function Positive(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['positive'],
//   };
// }

// function Maxlength(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['maxlength'],
//   };
// }

// function validate(obj: any) {
//   const objValidatorConfig = registeredValidators[obj.constructor.name];
//   if (!objValidatorConfig) {
//     return true;
//   }
//   let isValid = true;
//   for (const prop in objValidatorConfig) {
//     for (const validator of objValidatorConfig[prop]) {
//       switch (validator) {
//         case 'required':
//           isValid = isValid && !!obj[prop];
//           break;
//         case 'positive':
//           isValid = isValid && obj[prop] > 0;
//           break;
//         case 'maxlength':
//           isValid = isValid && obj[prop].length < 5;
//           break;
//       }
//     }
//   }
//   console.log(registeredValidators);
//   return isValid;
// }

// const config: { [input: string]: string[] } = {};

// const addValidator = (input: string, type: string) => {
//   config[input] = config[input] ? [...config[input], type] : [type];
// };

// const Required = (_: any, input: string) => addValidator(input, 'required');
// const Maxlength = (_: any, input: string) => addValidator(input, 'maxlength');
// const Positive = (_: any, input: string) => addValidator(input, 'positive');

// const validate = (course: any) => {
//   Object.entries(config).every(([input, types]) =>
//     types.every(
//       type =>
//         (type === 'required' && course[input]) ||
//         (type === 'positive' && course[input] > 0) ||
//         (type === 'maxlength' && course[input].length < 5)
//     )
//   );
//   console.log(config);
// };

const config: { [propName: string]: string[] } = {};

const addValidator = (validator: string, type: string) =>
  (config[validator] = config[validator]
    ? [...config[validator], type]
    : [type]);

const Required = (_: any, propName: string) => {
  addValidator(propName, 'required');
};
const Maxlength = (_: any, propName: string) => {
  addValidator(propName, 'maxlength');
};
const Positive = (_: any, propName: string) => {
  addValidator(propName, 'positive');
};

function validate(course: any) {
  let isValid = true;

  console.log(config);

  if (!config) {
    console.log('heeey');
    return isValid;
  }

  for (const prop in course) {
    console.log(prop);
    for (const validator of prop) {
      console.log(validator);
      switch (validator) {
        case 'required':
          isValid = isValid && Boolean(course[prop]);
          break;
        case 'maxlength':
          isValid = isValid && course[prop] < 20;
          break;
        case 'positive':
          isValid = isValid && course[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Maxlength
  @Required
  title: string;
  @Positive
  @Required
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (validate(createdCourse)) {
    console.log('all right!');
  } else {
    console.log('something went wrong.');
  }
});
