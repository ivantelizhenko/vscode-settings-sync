/*
// IMPORTING MODULE

// we can import something, that we exported
import {
  addToCart,
  totalPrice as price, // price = totalPrice. Cannot use totalPrice.
  tq,
} from './shoppingCart.js'; // import have been from this file

// // action with import elements
console.log('Importing module');
addToCart('bread', 5);
console.log(price, tq);

// we import all from './shoppingCart.js'
import * as ShopingCart from './shoppingCart.js'; // name like ES6 Classes

// action with import elements
ShopingCart.addToCart('bread', 5);
console.log(ShopingCart.totalPrice);

// we can name as we want from export default
import add from './shoppingCart.js';
add('pizza', 2);

// mix named exports and defauld exports(bad experience)
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
// The module pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    cart,
    totalPrice,
    totalQuantity,
    addToCart,
  };
})();

ShoppingCart2.addToCart('pizza', 4);
ShoppingCart2.addToCart('apples', 2);
console.log(ShoppingCart2);
*/

/*
//Like before ES6(probably🤷🏼‍♂️)(in Node.js)
//Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to cart`);
};

//Import
const {addToCart} = require('./shoppingCart.js')
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
