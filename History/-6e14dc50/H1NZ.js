'use strict';

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const itemCurr = e.target.closest('.item');
    const child = itemCurr.children[3];

    // 1. delete open from every item
    items.forEach(item => item.classList.remove('open'));

    // console.log(itemCurr.parentElement.children);

    // // 2. add open to curr item
    itemCurr.classList.add('open');
    child.style.transform = 'translateY(0rem)';
    child.style.transition = 'all 20s ease 20s';
    console.log(child);
  });
});
