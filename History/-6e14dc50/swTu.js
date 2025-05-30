'use strict';

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const itemCurr = e.target.closest('.item');

    // 1. delete open from every item
    items.forEach(item => item.classList.remove('open'));
    console.log(itemCurr.childNodes.div());
    // // 2. add open to curr item
    itemCurr.classList.add('open');
    itemCurr.style.transform = 'translateY(0rem)';
  });
});
