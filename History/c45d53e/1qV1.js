// exporting module
console.log('Exporting module');

const shippingCost = 10;
const card = [];

//can export individually what we need
// Work only top-level
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

export {
  // we can export what we want

  totalPrice,
  totalQuantity as tq, // tq = totalQuantity. We cannot use totalQuantity
};
