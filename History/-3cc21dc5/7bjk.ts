// Variables
const names: Array<string> = []; // string[]
names[0].split(' '); // ok

// Promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('10');
  }, 2000);
});

promise.then(data => {
  data.split(' '); // ok
});

// Generic functions
// Can add generic types(any amount)
function hey<Type>(arg: Type): Type {
  return arg;
}

const result1 = hey<string>('heeeeye'); // ok - can set
const result2 = hey('heeeeye'); // ok - without setting

// Can do Constraints for generic types. Now it can be some object with their own structure and types.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Ivan', hobbies: ['football'] }, 20);

interface Lengthy {
  length: number;
}

function elementAndDescription<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value';
  if (element.length === 1) {
    description = 'Got 1 element';
  } else if (element.length > 1) {
    description = `Got ${element.length} elements`;
  }
  return [element, description];
}

// This function will work with all, that have length property
elementAndDescription('Hi there!'); // ok
elementAndDescription(['Sport', 'Reading']); // ok
// elementAndDescription(10); // error

// This extends means, that U will be a key of T. If i'm not mistaken
function testKeyof<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('string1');
textStorage.addItem('string2');
