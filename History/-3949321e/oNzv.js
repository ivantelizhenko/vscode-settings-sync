'use strict';

const minimumLength = function (s) {
  const array = s.split('');

  for (let i = 0; i < array.length; i++) {
    if (array.at(0) !== array.at(-1)) return array.length;
    let elDel = array.at(0);
    for (let i = 0; i < s.length; i++) {
      if (elDel !== array.at(0)) break;
      array.splice(0, 1);
    }

    for (let i = 0; i < s.length; i++) {
      if (elDel !== array.at(-1)) break;
      array.splice(-1, 1);
    }
  }

  if (array.length === 2 && new Set(array).length === 1) return 0;
  return array.length;
};

console.log(minimumLength('cabacbac'));
