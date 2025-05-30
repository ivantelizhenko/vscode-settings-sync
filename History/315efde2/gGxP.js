'use strict';
const transform = function (lines) {
  const newLines = [];
  for (const str of lines) {
    console.log(str);

    const twoStr = str.replace('_', '');
    newLines.push(twoStr);
  }
  console.log(newLines);
};
