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
  console.log(array);
  // return array;
};

console.log(minimumLength('ca'));
console.log(minimumLength('cabaabac'));
console.log(minimumLength('aabccabba'));
console.log(
  minimumLength(
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbacccabbabccaccbacaaccacacccaccbbbacaabbccbbcbcbcacacccccccbcbbabccaacaabacbbaccccbabbcbccccaccacaccbcbbcbcccabaaaabbbbbbbbbbbbbbb'
  )
);
