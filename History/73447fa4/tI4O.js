'use strict';

const btns = document.querySelectorAll('.navigation__link');
const sections = [...document.querySelectorAll('section')];
const checkbox = document.querySelector('.navigation__checkbox');

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

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (!e.target.closest('.navigation__link')) return;
    e.preventDefault();
    const thisSection = btn.dataset.section;
    window.scrollTo(0, coords[thisSection]);
    console.log(coords[thisSection]);
    checkbox.checked = false;
  });
});

console.log(coords);
window.scrollTo(0, 1000);
