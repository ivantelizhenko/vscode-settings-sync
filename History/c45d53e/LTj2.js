// EXPORTING MODULE
console.log('Exporting module');

//Blocking code

console.log('Start fetching users ');
await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();

const shippingCost = 10;
const card = [];

// Work ONLY TOP-LEVEL
//can export individually what we need
export const addToCart = function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} was added to cart`);
};

// Doesn't work
// if (true) {
//   export const addToCart = function (product, quantity) {
//     card.push({ product, quantity });
//     console.log(`${quantity} ${product} was added to cart`);
//   };
// }

const totalPrice = 237;
const totalQuantity = 27;
// we can export what we want
export { totalPrice, totalQuantity as tq };
// tq = totalQuantity. We cannot use totalQuantity

// we can export just a value, without name, and name it in import
export default function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} was added to cart`);
}
