'use strict';

const btns = document.querySelectorAll('.navigation__link');
const sections = [...document.querySelectorAll('section')];
const checkbox = document.querySelector('.navigation__checkbox');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (!e.target.closest('.navigation__link')) return;
    const thisSection = btn.dataset.section;
    window.scrollTo(0, coords[thisSection][1]);
    console.log(thisSection);
    checkbox.checked = false;
  });
});

const getCoords = section => {
  const sectinCoords = section.getBoundingClientRect();
  return sectinCoords.y + window.scrollY;
};

const coords = Object.fromEntries(
  new Map(
    sections.map(section => {
      return [section.dataset.section, getCoords(section)];
    })
  )
);
console.log(coords);
