"use strict";

const pyramid = function (height, symbol) {
  if (symbol.length !== 1)
    return console.log("You must write 1 length symbol! ");

  const arr = Array.from({ length: height }, (_, i) => i * 2 + 1);
  const newArr = arr.map((el) => symbol.padStart(el, symbol));
  newArr.forEach((el, i) => console.log(el.padStart(height + i)));
};

const obj = `[{id:0,name:"ivan"},
{id:1,name:"maria"},
{id:2,name:"anton"},
]`;

function set(name, value) {
  localStorage.setItem(String(name), JSON.stringify(value));
}
set("obj", obj);

const get = localStorage.getItem("obj");
console.log(get);
