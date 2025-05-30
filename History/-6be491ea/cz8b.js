"use strict";

// const pyramid = function (height, symbol) {
//   if (symbol.length !== 1)
//     return console.log("You must write 1 length symbol! ");

//   const arr = Array.from({ length: height }, (_, i) => i * 2 + 1);
//   const newArr = arr.map((el) => symbol.padStart(el, symbol));
//   newArr.forEach((el, i) => console.log(el.padStart(height + i)));
// };

async function position() {
  const result = await navigator.geolocation.getCurrentPosition(
    function (res) {
      return { lat: res.coords.latitude, lng: res.coords.longitude };
    },
    function (err) {
      console.log(err);
    }
  );
  return result;
}

console.log(position());
