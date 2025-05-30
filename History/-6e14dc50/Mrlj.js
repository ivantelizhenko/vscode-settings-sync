'use strict';

const items = document.querySelectorAll('.item');

console.log(items);
items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('---NEW---');
    console.log(e.target);
    console.log(e);
    console.log(item);
    console.log(items);
    // 1. delete open from every item
    items.forEach(item => item.classList.remove('.open'));

    // // 2. add open to curr item
    // e.target.closest('.item').classList.add('open');
  });
});
