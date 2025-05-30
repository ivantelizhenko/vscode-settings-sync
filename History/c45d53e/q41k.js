//prettier-ignore

// exporting module
console.log('Exporting module');

const shippingCost = 10;
const card = [];

// We can do
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

export { totalPrice, totalQuantity as tq };
