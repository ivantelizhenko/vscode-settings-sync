//prettier-ignore
// exporting module
console.log('Exporting module');

const shippingCost = 10;
const card = [];

// Work only top-level
//can export
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
//prettier-ignore
export { // we can export what we want
  totalPrice,
   totalQuantity as tq // tq = totalQuantity. We cannot use totalQuantity
   };
