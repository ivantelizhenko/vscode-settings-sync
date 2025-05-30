// exporting module

console.log('Exporting module');

const shippingCost = 10;
const card = [];

export const addToCart = function (product, quantity) {
  createImageBitmap.push({ product, quantity });
  console.log(`${quantity} ${product} was added to cart`);
};
